import React from "react";

const Journey = ({ language = 'en' }) => {
  const content = {
    en: {
      title: "My Entrepreneurial Journey",
      subtitle: "The Story Behind KalaSetu",
      steps: [
        {
          step: "1",
          title: "The Spark – Vision Behind the Venture",
          description: "I noticed many local artisans with incredible talent but no platform to showcase it. That's when the idea of KalaSetu was born — to bring their hidden art to light."
        },
        {
          step: "2",
          title: "The First Steps – Building a Community",
          description: "I discussed this problem with my teacher to validate if it truly exists. That small discussion sparked a big mission and gave the confidence to move forward."
        },
        {
          step: "3",
          title: "Seizing the Moment – Getting the Opportunity",
          description: "I got the chance to present the idea at the KIIT Ideathon. The judges appreciated the presentation, which gave me the first real push to take it seriously."
        },
        {
          step: "4",
          title: "From Idea to Reality – Prototyping the Dream",
          description: "After being selected among the top 15 teams, we began building a strong prototype. It was the first step in turning the idea into something tangible."
        },
        {
          step: "5",
          title: "Learning Along the Way – Challenges & Growth",
          description: "There were rejections and tough moments, but I believe in learning by doing. Each failure became a lesson that shaped the project and me."
        },
        {
          step: "6",
          title: "Looking Ahead – The Future Vision",
          description: "I aim to make KalaSetu the No.1 Indian brand that promotes our culture not just in India, but globally — with no limits."
        },
        {
          step: "7",
          title: "The Impact We Aim For – Our Mission Beyond Business",
          description: "Our goal is to ensure artisans get the value, dignity, and recognition they truly deserve in today's world."
        }
      ]
    },
    hi: {
      title: "मेरी उद्यमशीलता की यात्रा",
      subtitle: "कलासेतु के पीछे की कहानी",
      steps: [
        {
          step: "1",
          title: "चिंगारी – उद्यम के पीछे की दृष्टि",
          description: "मैंने देखा कि कई स्थानीय कारीगरों के पास अविश्वसनीय प्रतिभा है लेकिन इसे दिखाने का कोई मंच नहीं है। तभी कलासेतु का विचार जन्मा — उनकी छुपी हुई कला को उजागर करने के लिए।"
        },
        {
          step: "2",
          title: "पहले कदम – समुदाय का निर्माण",
          description: "मैंने इस समस्या पर अपने शिक्षक से चर्चा की कि क्या यह वास्तव में मौजूद है। उस छोटी सी चर्चा ने एक बड़े मिशन की शुरुआत की और आगे बढ़ने का विश्वास दिया।"
        },
        {
          step: "3",
          title: "अवसर को पकड़ना – मौका मिलना",
          description: "मुझे KIIT आइडियाथॉन में अपना विचार प्रस्तुत करने का मौका मिला। जजों ने प्रेजेंटेशन की सराहना की, जिसने मुझे इसे गंभीरता से लेने की पहली वास्तविक प्रेरणा दी।"
        },
        {
          step: "4",
          title: "विचार से वास्तविकता तक – सपने का प्रोटोटाइप",
          description: "टॉप 15 टीमों में चुने जाने के बाद, हमने एक मजबूत प्रोटोटाइप बनाना शुरू किया। यह विचार को कुछ ठोस रूप देने की पहली सीढ़ी थी।"
        },
        {
          step: "5",
          title: "रास्ते में सीखना – चुनौतियां और विकास",
          description: "अस्वीकृतियां और कठिन क्षण आए, लेकिन मैं करके सीखने में विश्वास करता हूं। हर असफलता एक सबक बनी जिसने परियोजना और मुझे आकार दिया।"
        },
        {
          step: "6",
          title: "आगे देखना – भविष्य की दृष्टि",
          description: "मेरा लक्ष्य कलासेतु को नंबर 1 भारतीय ब्रांड बनाना है जो हमारी संस्कृति को न केवल भारत में बल्कि विश्व स्तर पर बढ़ावा दे — बिना किसी सीमा के।"
        },
        {
          step: "7",
          title: "हमारा लक्ष्य प्रभाव – व्यवसाय से परे हमारा मिशन",
          description: "हमारा उद्देश्य यह सुनिश्चित करना है कि कारीगरों को वह मूल्य, गरिमा और पहचान मिले जिसके वे आज की दुनिया में वास्तव में हकदार हैं।"
        }
      ]
    }
  };

  const currentLang = content[language];

  return (
    <div className="pt-28 pb-12 bg-gradient-to-r from-orange-800 via-red-800 to-orange-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4 font-serif">{currentLang.title}</h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            {currentLang.subtitle}
          </p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          {/* Continuous timeline line */}
          <div className="absolute left-8 top-8 w-0.5 h-full bg-gradient-to-b from-amber-400 to-orange-400"></div>
          
          {currentLang.steps.map((step, index) => (
            <div key={index} className="flex items-start mb-16 relative">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold font-serif shadow-lg z-10 relative">
                {step.step}
              </div>
              <div className="ml-8 flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">{step.title}</h3>
                <p className="text-orange-100 text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;