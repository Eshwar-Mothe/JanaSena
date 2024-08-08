// UserChoice.js

import React, { useState } from 'react';
import District from './Districts';
import MandalList from './Mandals';
import VillageList from './Villages';
import { AddTodo } from './AddTodo';
// import './Reg.css';

const UserChoice = () => {
    const [view, setView] = useState('districts');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedMandal, setSelectedMandal] = useState('');
    const [selectedVillage, setSelectedVillage] = useState('');

    const headerStyle = {
        background: "#a84343",
        color: "#fff",
        textAlign: "center",
        padding: "1rem"
    }

    const generateDistricts = () => {
        return [
            "ADILABAD", "BHADRADRI_KOTHAGUDEM", "HANUMAKONDA", "HYDERABAD", "JAGTIAL", "JANGAON", "KAMAREDDY", "KARIMNAGAR",
            "KHAMMAM", "MAHABUBABAD", "MAHABUBNAGAR", "MANCHERIAL", "MEDAK", "MULUG", "NAGARKARNOOL", "NALGONDA", "NARAYANPET",
            "NIRMAL", "NIZAMABAD", "PEDDAPALLI", "RANGAREDDY", "SANGAREDDY", "SIDDIPET", "SURYAPET", "VIKARABAD", "WANAPARTHY",
            "WARANGAL", "JAYASHANKAR_BHOOPALPALLY", "JOGULAMBA_GADWAL", "KOMARAM_BHEEM_ASIFABAD", "MEDCHAL_MALKAJGIRI",
            "RAJANNA_SIRICILLA", "YADADRI_BHUVANAGIRI"
        ];
    };

    const districtNames = generateDistricts();

    const handleDistrictSelect = (district) => {
        setSelectedDistrict(district);
        setSelectedMandal('');
        setSelectedVillage('');
        setView('mandals');
    };

    const handleMandalSelect = (mandal) => {
        setSelectedMandal(mandal);
        setSelectedVillage('');
        setView('villages');
    };

    const handleVillageSelect = (village) => {
        setSelectedVillage(village);
        setView('joinForm');
    };

    const renderView = () => {
        switch (view) {
            case 'districts':
                return <District districts={districtNames} onDistrictSelect={handleDistrictSelect} />;
            case 'mandals':
                return <MandalList selectedDistrict={selectedDistrict} onMandalSelect={handleMandalSelect} />;
            case 'villages':
                return <VillageList selectedMandal={selectedMandal} onVillageSelect={handleVillageSelect} />;
            case 'joinForm':
                return <AddTodo selectedDistrict={selectedDistrict} selectedMandal={selectedMandal} selectedVillage={selectedVillage} />;
            default:
                return <div>Invalid view</div>;
        }
    };

    return (
        <div>
            <header>
                <h1 style={headerStyle}>Districts, Mandals & Villages</h1>
            </header>
            <div className="flex-container" >
                {renderView()}
            </div>
        </div>
    );
};

export default UserChoice;
