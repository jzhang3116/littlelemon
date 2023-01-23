import { useState } from "react";

function BookingForm() {
    const [date, setDate] = useState();
    const [time, setTime] = useState("17:00");
    const [guest, setGuest] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    function onSubmit(e) {
        e.preventDefault();
        console.log(date);
        console.log(time);
        console.log(guest);
        console.log(occasion);

    }

    return (
        <>
            <form style={{display: "grid", maxWidth: 200, gap: 20}} onSubmit={onSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" onChange={(e) => setDate(e.target.value)}></input>
                <label htmlFor="res-time">Choose time </label>
                <select id="res-time " onChange={(e) => setTime(e.target.value)}>
                    {
                        availableTimes.map((item, key) => (<option key={key}>{item}</option>))
                    }
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setGuest(e.target.value)}></input>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"></input>
            </form>
        </>
    )
}

export default BookingForm;