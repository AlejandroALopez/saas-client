import React from 'react';
import Navigation from '../../components/navigation';
import { ColumnProps } from '../../types/weekProps';
import { testPlan1 } from '../../utils/testData';
import './style.scss';

const Column: React.FC<ColumnProps> = ({ title }) => {
    return (
        <div key={title} className="kanban-column">
            <p>{title}</p>
        </div>
    )
}

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
                        <Column title={col} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WeekPage;
