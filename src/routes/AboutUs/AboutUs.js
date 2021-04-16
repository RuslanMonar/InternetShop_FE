import React from "react";
import Header from "../../modules/Navigation/Header";
import classes from "../../css/style.aboutUs.css";
import Footer from "../../modules/Navigation/Footer"
const About = () => {
  return (
    <div>
      <Header />
      <div className="AboutUsOurTeam">
        <p id="titleAboutUs"> Our Team </p>

          
        </div>
        <div id="container" >
        <div  className="textAboutUs_container">
          <div id="textAboutUs">
            Hope till you drop, spend till the end, buy till you die.We are all
            consumers.But can we afford to continue a lifestyle that causes
            pollu­ tion and social injustice ? Imagine a room filled with people
            talking about you.They are discussing your likes and dislikes, your
            needs, your habits, your dreams.Who do you think they are ?
            Concerned parents ? Wrong.These people are marketing directors.They
            spend millions of dollars and thousands of hours doing market
            research to study your spending habits.Why ? The answer is simple :
            money.Teenagers are the largest - growing market in the
            world.According to one teen - marketing expert, every year American
            teenagers spend $89 billion.So it’ s vital for companies to capture
            the young consumer before the competition does.‘How do we appeal to
            teenagers ? ’It is a very important question for those with
            something to sell.Television is the most powerful means for
            advertisers aiming at teens.MTV has over 200 companies paying top
            dollars to advertise on their prime - time programmes.According to
            the head of Sales and Marketing for Pepsi - Cola, ‘MTV is aimed at
            the segment we want to reach : teenagers.
          </div>
         
          <div className="textAboutUsImg">
            <img src="img/AboutUsTeamphotoposter.jpg" alt="Team">
              
            </img>
          </div>
        </div>
        <div id="textAboutUs" className="textAboutUsTraining">
          <div className="textAboutTrainingPhoto">
            <img src="img/AboutUsTraining.jpg"></img>
          </div>
          <div  className="textAboutUsTrainingDescription">
            
            Hope till you drop, spend till the end, buy till you die.We are all
            consumers.But can we afford to continue a lifestyle that causes
            pollu­ tion and social injustice ? Imagine a room filled with people
            talking about you.They are discussing your likes and dislikes, your
            needs, your habits, your dreams.Who do you think they are ?
            Concerned parents ? Wrong.These people are marketing directors.They
            spend millions of dollars and thousands of hours doing market
            research to study your spending habits.Why ? The answer is simple :
            money.Teenagers are the largest - growing market in the
            world.According to one teen - marketing expert, every year American
            teenagers spend $89 billion.So it’ s vital for companies to capture
            the young consumer before the competition does.‘How do we appeal to
            teenagers ? ’It is a very important question for those with
            something to sell.Television is the most powerful means for
            advertisers aiming at teens.MTV has over 200 companies paying top
            dollars to advertise on their prime - time programmes.According to
            the head of Sales and Marketing for Pepsi - Cola, ‘MTV is aimed at
            the segment we want to reach : teenagers.
          </div>


        </div>

        <div className="AboutUsGallery">
          <div  className="AboutUsEmploye"><img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png"></img>
            <div className="AboutUsEmployeText">Andriy Yakovenko
            <p>Product manager</p>
            </div>
            
            </div>
            <div  className="AboutUsEmploye"><img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png"></img>
            <div className="AboutUsEmployeText">Andriy Yakovenko
            <p>Product manager</p>
            </div>
            
            </div>
            <div  className="AboutUsEmploye"><img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png"></img>
            <div className="AboutUsEmployeText">Andriy Yakovenko
            <p>Product manager</p>
            </div>
            
            </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
