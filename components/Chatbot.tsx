'use client';

import { useState, useRef, useEffect } from 'react';
import { COLORS } from '@/lib/constants';
import { X, Send, User } from 'lucide-react';
import Lottie from 'lottie-react';
import chatbotAnimation from '@/public/images/Live chatbot.json';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const faqData: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['services', 'offer', 'provide', 'install', 'installation'],
    answer: "We offer comprehensive solar solutions including:\n\n• Residential solar panel installation\n• Commercial solar systems\n• Solar for housing societies\n• Solar maintenance services\n\nOur team provides end-to-end installation services under MNRE and UPNEDA guidelines."
  },
  {
    keywords: ['cost', 'price', 'budget', 'expensive', 'cheap', '费用', '价格'],
    answer: "The cost of solar installation depends on your energy requirements, roof size, and system capacity. We provide free quotes tailored to your specific needs. On average, residential systems start from ₹1.5 lakhs. Contact us for a detailed quote!"
  },
  {
    keywords: ['benefit', 'advantage', 'why solar', 'solar benefit', '省钱', '好处'],
    answer: "Solar energy offers numerous benefits:\n\n• Reduced electricity bills (up to 90% savings)\n• Government subsidies and tax benefits\n• Environmental sustainability\n• Energy independence\n• Low maintenance costs\n• Increased property value"
  },
  {
    keywords: ['time', 'duration', 'how long', 'install time', '多久', '时间'],
    answer: "Installation timeline:\n\n• Residential installations: 1-3 days\n• Commercial projects: 1-4 weeks (depending on system size)\n\nWe ensure minimal disruption during the installation process."
  },
  {
    keywords: ['warranty', 'guarantee', 'maintenance', 'AMC', 'service', '保修', '维护'],
    answer: "Yes! We offer comprehensive warranties:\n\n• Solar panels: 25 years\n• Inverters: 5-10 years\n• Workmanship: 5 years\n\nWe also provide Annual Maintenance Contracts (AMC) to ensure optimal performance of your system."
  },
  {
    keywords: ['brand', 'manufacture', 'company', 'quality', '品牌'],
    answer: "We use top-tier solar brands including:\n\n• Tata, Adani, Vikram, Waree\n• Exide, Amaron, Luminous\n• Loom Solar\n\nAll products are certified and meet MNRE quality standards."
  },
  {
    keywords: ['quote', 'contact', 'reach', 'how to', 'enquiry', '联系', '报价'],
    answer: "Getting a quote is easy!\n\n• Call: +91 89338 14898\n• Emailriorlnaekmolar@gmall.oom• Fill the contact form on this page\n\nOur team will assess your requirements and provide a free quote within 24 hours."
  },
  {
    keywords: ['location', 'address', 'where', 'area', 'lucknow', '地址', '位置'],
    answer: "We are based in:\n\n📍 Lucknow, Uttar Pradesh, India\n\nOur team is available for on-site consultations across Lucknow and surrounding regions."
  },
  {
    keywords: ['payback', 'return', 'investment', 'roi', 'earn', 'profit', '回本', '投资'],
    answer: "The typical payback period:\n\n• Residential systems: 4-6 years\n• Depends on electricity consumption, system size, and subsidies\n\nAfter payback, you enjoy virtually free electricity for 25+ years!"
  },
  {
    keywords: ['monitor', 'app', 'track', 'check', 'monitoring', '监控'],
    answer: "Yes! All our systems come with smart monitoring:\n\n• Track real-time energy production\n• Monitor consumption and savings\n• Available via mobile app or web portal\n\nStay connected to your solar system 24/7!"
  },
  {
    keywords: ['subsidy', 'government', 'MNRE', 'UPNEDA', 'incentive', '补贴'],
    answer: "Government subsidies available:\n\n• Central government subsidy through MNRE\n• State-level incentives through UPNEDA\n• Tax benefits under Income Tax Act\n\nWe help you navigate all available subsidies and paperwork!"
  },
  {
    keywords: ['panel', 'solar panel', 'module', '板'],
    answer: "We install high-quality solar panels from top brands like Tata, Adani, Vikram, and Waree. All panels come with 25-year performance warranty and are MNRE certified."
  },
  {
    keywords: ['inverter', 'inverters', '逆变器'],
    answer: "We install reliable inverters from trusted brands like SMA, Fronius, and Delta. Inverters come with 5-10 years warranty depending on the brand you choose."
  },
  {
    keywords: ['hello', 'hi', 'hey', 'namaste', '你好'],
    answer: "Namaste! 🙏\n\nWelcome to Orintek Solar Energy Solutions! How can I help you today? Feel free to ask any questions about solar installations, costs, or our services."
  },
  {
    keywords: ['thank', 'thanks', 'helpful', '谢谢'],
    answer: "You're welcome! 😊\n\nHappy to help! If you have any more questions about going solar, feel free to ask. You can also get a free quote by contacting us!"
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Namaste! 🙏\n\nWelcome to Orintek Solar! I'm your solar assistant. Ask me anything about solar panels, installation, costs, or our services!",
      isUser: false
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    for (const faq of faqData) {
      for (const keyword of faq.keywords) {
        if (lowerQuestion.includes(keyword)) {
          return faq.answer;
        }
      }
    }

    return "Thank you for your question! For detailed information about this, please contact our team:\n\n📞 +91 89338 14898\n📧 orinteksolar@gmail.com\n\nOr fill out the contact form and we'll get back to you within 24 hours!";
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length,
      text: inputText,
      isUser: true
    };

    const botResponse: Message = {
      id: messages.length + 1,
      text: getAnswer(inputText),
      isUser: false
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-23 h-23  rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 z-50 overflow-hidden"
        aria-label="Open chat"
      >
        <Lottie 
          animationData={chatbotAnimation} 
          className="w-full h-full"
          loop={true}
        />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border"
          style={{ borderColor: COLORS.lightBlue }}
        >
          {/* Header */}
          <div
            className="p-4 flex items-center justify-between"
            style={{ backgroundColor: COLORS.primary }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                <Lottie 
                  animationData={chatbotAnimation} 
                  className="w-full h-full"
                  loop={true}
                />
              </div>
              <div>
                <h3 className="font-bold text-white">Solar Assistant</h3>
                <p className="text-xs text-white/80">Ask me anything!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${message.isUser
                      ? 'rounded-br-md'
                      : 'rounded-bl-md'
                    }`}
                  style={{
                    backgroundColor: message.isUser ? COLORS.primary : COLORS.lightBlue,
                    color: message.isUser ? 'white' : COLORS.primary
                  }}
                >
                  <div className="flex items-start gap-2">
                    {!message.isUser && (
                      <Lottie 
                      animationData={chatbotAnimation} 
                      className="w-5 h-5 flex-shrink-0"
                      loop={true}
                    />
                    )}
                    {message.isUser && (
                      <User className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                    )}
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="px-3 py-2 border-t bg-gray-50 overflow-x-auto flex gap-2 whitespace-nowrap">
            {['Cost?', 'Services?', 'Warranty?', 'Subsidy?', 'Contact?'].map((q, i) => (
              <button
                key={i}
                onClick={() => {
                  setInputText(q);
                }}
                className="px-3 py-1 text-xs rounded-full transition-colors"
                style={{ backgroundColor: COLORS.lightBlue, color: COLORS.primary }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2"
                style={{ borderColor: COLORS.lightBlue, '--tw-ring-color': COLORS.primary } as React.CSSProperties}
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: COLORS.primary, color: 'white' }}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
