import React from 'react';

const AppointmentTable = ({appointment, index}) => {
    const {patientName, slot, date} = appointment
    return (
            <tr>
                <th>{index + 1}</th>
                <td>{patientName}</td>
                <td>{slot}</td>
                <td>{date}</td>
            </tr>
    );
};

export default AppointmentTable;