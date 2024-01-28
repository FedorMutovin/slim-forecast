import React from "react";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import ForecastForm from "./ForecastForm.jsx";


test("render data in a card", () => {
    const data = {
        approximateFinalDate: "08.09.2024",
        nextCheckDate: "15.01.2024",
        nextCheckExpectedWeight: 99.00,
        currentWeightGoal: 80.00,
        approximateAchievementDate: "01.03.2024"
    }

    const { getByText} = render(<ForecastForm data={data}/>)
    expect(getByText("01.03.2024")).toBeInTheDocument()
})
