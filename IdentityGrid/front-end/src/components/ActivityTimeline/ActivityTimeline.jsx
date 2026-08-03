import { useEffect, useState } from "react";
import {
  FaUserPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { getActivities } from "../../userApis";

import "./ActivityTimeline.css";

function ActivityTimeline() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await getActivities(token);

      setActivities(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const getIcon = (type) => {

    switch (type) {

      case "add":
        return <FaUserPlus />;

      case "edit":
        return <FaEdit />;

      case "delete":
        return <FaTrash />;

      default:
        return <FaUserPlus />;
    }
  };

  return (

    <div className="activity-list">

      {activities.map((activity) => (

        <div
          className="activity-item"
          key={activity._id}
        >

          <div className="activity-icon">
            {getIcon(activity.type)}
          </div>

          <div className="activity-content">

            <h4>{activity.message}</h4>

            <span>
              {new Date(activity.createdAt).toLocaleString()}
            </span>

          </div>

        </div>

      ))}

    </div>

  );

}

export default ActivityTimeline;