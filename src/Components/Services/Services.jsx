// src/components/Services.js
import React, { useEffect, useState } from "react";
import { db, doc, getDoc, collection, getDocs, onSnapshot } from "../../firebase";

const Services = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to cache Firestore data in localStorage
  const cacheFirestoreData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  // Function to get cached Firestore data from localStorage
  const getCachedFirestoreData = (key) => {
    const cachedData = localStorage.getItem(key);
    return cachedData ? JSON.parse(cachedData) : null;
  };

  // Function to fetch clients data
  const fetchClients = async () => {
    try {
      // Check if data is cached
      const cachedClients = getCachedFirestoreData("clients");
      const cachedTimestamp = getCachedFirestoreData("clientsTimestamp");

      console.log("Cached Timestamp:", cachedTimestamp);

      // Fetch the latest timestamp from Firestore
      const timestampDoc = await getDoc(doc(db, "metadata", "lastUpdated"));
      const latestTimestamp = timestampDoc.data().timestamp;

      console.log("Firestore Timestamp:", latestTimestamp);

      // Convert Firestore timestamp to seconds
      const latestTimestampSeconds = latestTimestamp.seconds;

      // Convert cached timestamp to seconds (if it's a Firestore timestamp object)
      const cachedTimestampSeconds = cachedTimestamp?.seconds || cachedTimestamp;

      // If cached data is up-to-date, use it
      if (cachedClients && cachedTimestampSeconds === latestTimestampSeconds) {
        console.log("Using cached data");
        setClients(cachedClients);
        setLoading(false);
        return;
      }

      // If data has changed, fetch new data
      console.log("Fetching new data");
      const clientsCollection = collection(db, "clients");
      const clientsSnapshot = await getDocs(clientsCollection);
      const clientsList = clientsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Cache the new data and timestamp
      cacheFirestoreData("clients", clientsList);
      cacheFirestoreData("clientsTimestamp", latestTimestamp);

      // Update state
      setClients(clientsList);
    } catch (error) {
      console.error("Error fetching clients: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to listen for real-time updates to the timestamp
  const listenForUpdates = () => {
    const unsubscribe = onSnapshot(doc(db, "metadata", "lastUpdated"), (doc) => {
      const latestTimestamp = doc.data().timestamp;
      const cachedTimestamp = getCachedFirestoreData("clientsTimestamp");

      console.log("Listener: Latest Timestamp:", latestTimestamp);
      console.log("Listener: Cached Timestamp:", cachedTimestamp);

      // Convert timestamps to seconds for comparison
      const latestTimestampSeconds = latestTimestamp.seconds;
      const cachedTimestampSeconds = cachedTimestamp?.seconds || cachedTimestamp;

      // If the timestamp has changed, fetch new data
      if (cachedTimestampSeconds !== latestTimestampSeconds) {
        console.log("Data has changed, fetching new data...");
        fetchClients();
      }
    });

    return unsubscribe;
  };

  useEffect(() => {
    // Fetch clients data on initial load
    fetchClients();

    // Listen for real-time updates to the timestamp
    const unsubscribe = listenForUpdates();

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Our Clients
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-gray-800 rounded-lg shadow-lg p-6 text-white"
          >
            {/* Client Logo */}
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="w-24 h-24 mx-auto mb-4 rounded-full"
            />

            {/* Client Name */}
            <h2 className="text-xl font-semibold text-center mb-2">
              {client.name}
            </h2>

            {/* Client Description */}
            <p className="text-gray-300 text-center mb-4">
              {client.description}
            </p>

            {/* Client Images */}
            <div className="grid grid-cols-2 gap-2">
              {client.imgs.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${client.name} image ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;