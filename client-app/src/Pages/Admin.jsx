import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"; // Import Firestore functions as needed
import { db } from "../Firebase/config"

const Admin = () => {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    const fetchNotApprovedData = async () => {
      try {
        const timelineRef = collection(db, "timeline");
        const notApprovedQuery = query(
          timelineRef,
          where("status", "==", "not approved")
        );
        const snapshot = await getDocs(notApprovedQuery);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTimelineData(data);
      } catch (error) {
        console.error("Error fetching not approved data:", error.message);
      }
    };

    fetchNotApprovedData();
  }, []); // Fetch data when the component mounts

  const handleApprove = async (id) => {
    try {
      const timelineDocRef = doc(db, "timeline", id);
      await updateDoc(timelineDocRef, { status: "approved" });
      // Update local state to reflect the change
      setTimelineData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, status: "approved" } : item
        )
      );
    } catch (error) {
      console.error("Error approving timeline item:", error.message);
    }
  };

  const handleDiscard = async (id) => {
    try {
      const timelineDocRef = doc(db, "timeline", id);
      await deleteDoc(timelineDocRef);
      // Update local state to reflect the deletion
      setTimelineData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error discarding timeline item:", error.message);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {timelineData.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Status: {item.status}</p>
            <p>Visited State: {item.visitedState}</p>
            <p>Start Date: {item.startDate}</p>
            <p>End Date: {item.endDate}</p>
            <p>Image: {item.image}</p>
            {/* Add more details as needed */}
            <ul>
              {item.destinations.map((destination, index) => (
                <li key={index}>
                  <h4>{destination.name}</h4>
                  <p>Date: {destination.date}</p>
                  <p>Food: {destination.food}</p>
                  <p>Hotel: {destination.hotel}</p>
                  <p>Rating: {destination.rating}</p>
                  <p>Review: {destination.review}</p>
                </li>
              ))}
            </ul>
            <button onClick={() => handleApprove(item.id)}>Approve</button>
            <button onClick={() => handleDiscard(item.id)}>Discard</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
