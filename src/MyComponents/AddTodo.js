"useClient"

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BsInfo } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const AddTodo = ({ addTodo, selectedDistrict }) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const [fname, setFname] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [village, setVillage] = useState("");
    const [constituency, setConstituency] = useState("");
    const [district, setDistrict] = useState(selectedDistrict || "");
    const [pin, setPin] = useState("");

    const initialDistrict = params.get('district') || '';
    const initialMandal = params.get('mandal') || '';
    const initialVillage = params.get('village') || '';

    useEffect(() => {
        setDistrict(initialDistrict);
        setConstituency(initialMandal);
        setVillage(initialVillage);
    }, [initialDistrict, initialMandal, initialVillage]);

    const submit = (e) => {
        e.preventDefault();
        if (!fname || !mobile || !email || !village || !constituency || !district || !pin) {
            alert("Fields cannot be blank");
        } else {
            addTodo(fname, mobile, email, village, constituency, district, pin);
            setFname("");
            setMobile("");
            setEmail("");
            setVillage("");
            setConstituency("");
            setDistrict("");
            setPin("");
        }
    };

    return (
        <div className="container my-3">
            <h3 style={{ position: "absolute" }}>
                <span style={{ color: "red", textTransform: "uppercase", fontWeight: "bold" }}>
                    JanaSena
                </span>{" "}
                Joining Form
            </h3>
            <div style={{ textAlign: "right", fontSize: '25px' }} >
                <Link to="/benefits" style={{ cursor: 'pointer' }}><BsInfo style={{ color: "#f00" }} /></Link>
            </div>
            <br />
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">
                        Full Name
                    </label>
                    <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} className="form-control" id="fname" placeholder="Enter Your Full Name" aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">
                        Mobile
                    </label>
                    <input type="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} className="form-control" id="mobile" placeholder="Enter Your Mobile Number"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        E-mail
                    </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter Your Email"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="village" className="form-label">
                        Village/City
                    </label>
                    <input type="text" value={village} onChange={(e) => setVillage(e.target.value)} className="form-control" id="village" placeholder="Enter Your Village/City"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="constituency" className="form-label">
                        Constituency
                    </label>
                    <input type="text" value={constituency} onChange={(e) => setConstituency(e.target.value)} className="form-control" id="constituency" placeholder="Enter Your Constituency"
                    />
                </div>

                {/* Displayed only if village is provided in query parameters */}
                {initialVillage && (
                    <div className="mb-3">
                        <label htmlFor="village" className="form-label">
                            Village/City
                        </label>
                        <input type="text" value={village} onChange={(e) => setVillage(e.target.value)} className="form-control" id="village" placeholder="Enter Your Village/City"
                        />
                    </div>
                )}

                <div className="mb-3">
                    <label htmlFor="district" className="form-label">
                        District
                    </label>
                    <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} className="form-control" id="district" placeholder="Enter Your District"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="pin" className="form-label">
                        Pincode
                    </label>
                    <input type="text" value={pin} onChange={(e) => setPin(e.target.value)} className="form-control" id="pin" placeholder="Enter Your Pincode"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-sm btn-success"
                    style={{ backgroundColor: "red", borderColor: "red", paddingInline: '1.5rem', fontSize: '20px' }}
                >
                    Join
                </button>
            </form>
        </div>
    );
};
