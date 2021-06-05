import React, { useEffect, useState } from 'react';
import incubatorData from '../../components/fakeData/incubator.json';
import upcomingStartupsCard from '../../components/fakeData/home.json';
import IncubatorSliderBar from '../../components/IncubatorSlideBar/IncubatorSliderBar';
import Slider from "react-slick";
import Sidebar from '../../components/Sidebar/Sidebar';

const Incubator = () => {
  
  const [incubators, setIncubators] = useState([]);


    const [startupsCards, setStartupsCards] = useState([]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };

    useEffect(() => {
        setStartupsCards(upcomingStartupsCard);
    }, [])


    useEffect(() => {
        setIncubators(incubatorData);
    }, [])

    return (
      <div className="container-brand">

        <div className="incubator-bar rounded">
          <Slider {...settings}>
                    {
                        startupsCards.map(startupsCard => <IncubatorSliderBar startupsCard={startupsCard} />)
                    }
            </Slider>
        </div>


        <div className="row">
          <div className="col-md-3">
            <Sidebar/>
          </div>
          <div className="col-md-9">
            <div className="incubator-container">
              <div className="about-startup-container p-4">
                <h4>About Startup</h4>
                {incubators.map((incubator) => (
                  <p>{incubator.aboutStartupDescription}</p>
                ))}
              </div>
              <hr />
              <div className="vision-container p-4">
                <h4>Vision</h4>
                {incubators.map((incubator) => (
                  <p>{incubator.visionDescription}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Incubator;