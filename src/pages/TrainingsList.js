// src/pages/TrainingsList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookTraining } from "../store/bookingSlice";

export default function TrainingsList() {
  const dispatch = useDispatch();

  const trainings = useSelector(state => state.booking.trainings);
  const user = useSelector(state => state.auth.user);

  const handleBook = (id) => {
    if (!user) return alert("Чтобы забронировать — войдите в аккаунт");
    dispatch(bookTraining({ userEmail: user.email, trainingId: id }));
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginBottom: "20px" }}>Все доступные тренинги</h2>

      {trainings.length === 0 && <p>Тренингов пока нет</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "18px" }}>
        {trainings.map(t => (
          <div 
            key={t.id} 
            style={{
              border: "1px solid #ccc",
              width: "300px",
              borderRadius: "8px",
              padding: "15px"
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>{t.title}</h3>
            <p><b>Дата:</b> {t.date}</p>
            <p><b>Время:</b> {t.time}</p>
            <p><b>Локация:</b> {t.location}</p>
            <p><b>Осталось мест:</b> {t.availableSeats}</p>

            <button 
              onClick={() => handleBook(t.id)}
              style={{
                padding: "8px 14px",
                marginTop: "10px",
                width: "100%",
                borderRadius: "6px",
                background: t.availableSeats === 0 ? "#888" : "#1e90ff",
                color: "white",
                cursor: t.availableSeats === 0 ? "not-allowed" : "pointer",
                border: "none"
              }}
              disabled={t.availableSeats === 0}
            >
              {t.availableSeats === 0 ? "Нет мест" : "Забронировать"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
