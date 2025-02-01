import { useEffect, useState } from "react";
import { getFlights } from "../api/api";
import { Link } from "react-router-dom";

interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

const FlightTable = () => {

  const [flights, setFlights] = useState<Flight[]>([]);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const fetchFlights = async () => {
      const data = await getFlights();
      if (data.length === 0) {
        setError("Failed to load flights");
      } else {
        setFlights(data);
      }
    };

    fetchFlights();
    const interval = setInterval(fetchFlights, 10000); // Refresh every 10s

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="p-4">
     
      <div className="flex justify-center mb-6">
        <img src="/travelopia.jpeg" alt="Travelopia Logo" className="w-60 rounded-lg shadow-md" />
      </div>
  
      
      <h2 className="text-xl font-bold mb-4 text-center">Real-Time Flight Status Board</h2>
  
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (

        <table className="w-full border-collapse border border-gray-200">
          <thead>

            <tr className="bg-gray-100">
              <th className="border p-2">Flight No</th>

              <th className="border p-2">Airline</th>

              <th className="border p-2">Origin</th>

              <th className="border p-2">Destination</th>

              <th className="border p-2">Departure</th>

              <th className="border p-2">Status</th>

              <th className="border p-2">Details</th>
            </tr>

          </thead>
          <tbody>

            {flights.map((flight) => (

              <tr key={flight.id} className="border">
                <td className="p-2 border">{flight.flightNumber}</td>

                <td className="p-2 border">{flight.airline}</td>

                <td className="p-2 border">{flight.origin}</td>

                <td className="p-2 border">{flight.destination}</td>

                <td className="p-2 border">{flight.departureTime}</td>

                <td className="p-2 border">{flight.status}</td>

                <td className="p-2 border">

                  <Link to={`/flight/${flight.id}`} className="text-blue-500">View</Link>
                </td>
              </tr>

            ))}
          </tbody>
          
        </table>
      )}
    </div>
  );
  
};

export default FlightTable;
