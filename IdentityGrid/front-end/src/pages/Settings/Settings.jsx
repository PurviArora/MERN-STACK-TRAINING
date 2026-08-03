import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Settings.css";


function Settings() {


  const { darkMode, toggleTheme } = useContext(ThemeContext);


  const [emailNotification, setEmailNotification] = useState(false);

  const [showPopup, setShowPopup] = useState(false);



  const handleEmailToggle = () => {

    setEmailNotification(!emailNotification);


    if(!emailNotification){

      setShowPopup(true);


      setTimeout(() => {

        setShowPopup(false);

      },3000);

    }

  };



  return (

    <div className="settings-page">


      <div className="page-header">

        <h1>
          Settings
        </h1>

        <p>
          Manage application preferences.
        </p>

      </div>




      <div className="settings-card">


        <h2>
          Appearance
        </h2>



        <div className="setting-item">


          <div>

            <h4>
              Dark Mode
            </h4>

            <p>
              Change dashboard theme.
            </p>

          </div>



          <button

            className={
              darkMode
              ? "toggle-switch active"
              : "toggle-switch"
            }

            onClick={toggleTheme}

          >

            <span></span>

          </button>


        </div>


      </div>





      <div className="settings-card">


        <h2>
          Notifications
        </h2>



        <div className="setting-item">


          <div>

            <h4>
              Email Notifications
            </h4>


            <p>
              Receive important account updates.
            </p>


          </div>



          <button

            className={
              emailNotification
              ? "toggle-switch active"
              : "toggle-switch"
            }

            onClick={handleEmailToggle}

          >

            <span></span>

          </button>



        </div>



      </div>



      {
        showPopup && (

          <div className="notification-popup">

            🔔 You will receive notifications

          </div>

        )
      }



    </div>

  );

}


export default Settings;