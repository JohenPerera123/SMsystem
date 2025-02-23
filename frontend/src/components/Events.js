import React, { useState, useEffect } from 'react';
import { getEvents, addEvent } from '../services/eventService';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    eventID: '',
    eventName: '',
    location: '',
    startTime: '',
    endTime: '',
    date: '',
    status: 'Scheduled', // Default status
  });

  useEffect(() => {
    const fetchEvents = async () => {
      const fetchedEvents = await getEvents();
      setEvents(fetchedEvents);
    };
    fetchEvents();
  }, []);

  const handleAddEvent = async () => {
    const createdEvent = await addEvent(newEvent);
    setEvents([...events, createdEvent]); // Update list with new event
    setNewEvent({
      eventID: '',
      eventName: '',
      location: '',
      startTime: '',
      endTime: '',
      date: '',
      status: 'Scheduled',
    }); // Reset form after submission
  };

  return (
    <div className="container mt-5">
      <h2>Stadium Events</h2>

      <div className="mb-4">
        <h3>Add New Event</h3>

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Event ID"
          value={newEvent.eventID}
          onChange={(e) => setNewEvent({ ...newEvent, eventID: e.target.value })}
        />
        
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Event Name"
          value={newEvent.eventName}
          onChange={(e) => setNewEvent({ ...newEvent, eventName: e.target.value })}
        />

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
        />

        <input
          type="datetime-local"
          className="form-control mb-2"
          value={newEvent.startTime}
          onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
        />

        <input
          type="datetime-local"
          className="form-control mb-2"
          value={newEvent.endTime}
          onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
        />

        <input
          type="date"
          className="form-control mb-2"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />

        <select
          className="form-control mb-2"
          value={newEvent.status}
          onChange={(e) => setNewEvent({ ...newEvent, status: e.target.value })}
        >
          <option value="Scheduled">Scheduled</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <button className="btn btn-primary" onClick={handleAddEvent}>
          Add Event
        </button>
      </div>

      <h3>Upcoming Events</h3>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            {event.eventID} | {event.eventName} | {event.location} | {event.startTime} - {event.endTime} | {event.date} | {event.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
