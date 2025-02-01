import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFlightDetails } from "../api/api";

const FlightDetail = () => {

  const { id } = useParams();
  
  const [flight, setFlight] = useState<any>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {

      const data = await getFlightDetails(id!);

      if (!data) {

        setError("Flight details not found");

      } else {

        setFlight(data);
      }
    };
    fetchDetails();
  }, [id]);

  
  if (error) return <p className="text-red-500">{error}</p>;

  if (!flight) return <p>Loading...</p>;

  return (
    <div className="p-4">

      <h2 className="text-xl font-bold mb-4">Flight Details</h2>

      <p><strong>Flight Number:</strong> {flight.flightNumber}</p>

      <p><strong>Airline:</strong> {flight.airline}</p>

      <p><strong>Origin:</strong> {flight.origin}</p>

      <p><strong>Destination:</strong> {flight.destination}</p>

      <p><strong>Departure Time:</strong> {flight.departureTime}</p>

      <p><strong>Status:</strong> {flight.status}</p>
    </div>
  );
};

export default FlightDetail;
