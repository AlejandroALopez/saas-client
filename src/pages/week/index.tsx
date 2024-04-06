import React from 'react';
import Navigation from '../../components/navigation';
import './style.scss';

function WeekPage() {
    const goal: string = "My Goal";
    const weekNumber: number = 1;
    const columns: string[] = ["Backlog", "Active", "In Progress", "Completed"]

    return (
        <div className="two-cols-container">
            <Navigation />
            <div className="Week-Page">
                <div className="week-info">
                    <p className="week-goal">{goal}</p>
                    <p className="week-number">Week {weekNumber}</p>
                </div>
                <div className="kanban-container">
                    {columns.map((col) => (
                        <div key={col} className="kanban-column">
                            <p>{col}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WeekPage;
