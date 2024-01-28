import React from 'react';

class ForecastForm extends React.Component {
    render() {
        const {
            approximateFinalDate,
            nextCheckDate,
            nextCheckExpectedWeight,
            currentWeightGoal,
            approximateMilestoneDate
        } = this.props.data;

        return (
            <div>
                <div>{approximateFinalDate}</div>
                <div>{nextCheckDate}</div>
                <div>{nextCheckExpectedWeight}</div>
                <div>{currentWeightGoal}</div>
                <div>{approximateMilestoneDate}</div>
            </div>
        );
    }
}

export default ForecastForm;
