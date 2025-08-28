'use client';
import { useState } from "react";
import { Send, Zap, TrendingUp, Shield, Coins, ArrowUpRight, Activity, Globe, Lock } from "lucide-react";

import Navbar from "../components/Navbar";



export default function IntentPage() {
  const [messages, setMessages] = useState([
    { 
      sender: "ai", 
      text: "Welcome to SwapAI! I'm your intelligent DeFi assistant. I can help you with token swaps, liquidity analysis, yield farming opportunities, and market insights. What would you like to explore today?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    { icon: Coins, text: "Best Swap Routes", color: "from-cyan-500 to-blue-600" },
    { icon: TrendingUp, text: "Market Analysis", color: "from-green-500 to-emerald-600" },
    { icon: Shield, text: "Security Check", color: "from-orange-500 to-red-600" },
    { icon: Activity, text: "Yield Opportunities", color: "from-violet-500 to-purple-600" }
  ];

  const sendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = { 
      sender: "user", 
      text: input, 
      timestamp: new Date().toLocaleTimeString() 
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI response with more realistic delay
    setTimeout(() => {
      const responses = [
        "I'll help you find the most efficient swap route with minimal slippage. Let me analyze the current liquidity pools...",
        "Based on current market conditions, I can suggest optimal entry points and risk management strategies.",
        "I'm scanning multiple DEXs to find you the best rates. Current gas fees are moderate - good time to swap!",
        "Let me check the latest yield farming opportunities across major protocols for maximum returns.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, { 
        sender: "ai", 
        text: randomResponse,
        timestamp: new Date().toLocaleTimeString()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (actionText) => {
    setInput(actionText);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        </div>

        <div className="relative z-10 pt-24 px-4 pb-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">AI-Powered DeFi Intelligence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent mb-4">
                Intelligent Token Swapping
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of DeFi with AI-driven insights, optimal routing, and personalized trading strategies
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Stats Cards */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Total Volume</h3>
                      <p className="text-gray-400 text-sm">24h Trading</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-white">$2.4B</p>
                  <p className="text-green-400 text-sm flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +12.5%
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Security Score</h3>
                      <p className="text-gray-400 text-sm">Protocol Safety</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-white">99.8%</p>
                  <p className="text-green-400 text-sm flex items-center gap-1 mt-1">
                    <Lock className="w-3 h-3" />
                    Audited
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 hover:border-violet-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Avg. Slippage</h3>
                      <p className="text-gray-400 text-sm">Optimized Routes</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-white">0.08%</p>
                  <p className="text-cyan-400 text-sm">Ultra Low</p>
                </div>
              </div>

              {/* Chat Interface */}
              <div className="lg:col-span-2">
                <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">SwapAI Assistant</h2>
                        <p className="text-cyan-300">Your intelligent DeFi trading companion</p>
                      </div>
                      <div className="ml-auto flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-sm font-medium">Online</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="p-6 border-b border-white/10">
                    <p className="text-white/80 text-sm mb-4">Quick Actions:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {quickActions.map((action, idx) => {
                        const IconComponent = action.icon;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleQuickAction(action.text)}
                            className={`bg-gradient-to-r ${action.color} bg-opacity-10 hover:bg-opacity-20 border border-white/20 hover:border-white/30 rounded-2xl p-4 text-left transition-all duration-300 hover:scale-105`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center`}>
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-white font-medium text-sm">{action.text}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="h-96 overflow-y-auto p-6 space-y-4">
                    {messages.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-xs lg:max-w-md ${
                          msg.sender === "user" 
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" 
                            : "bg-white/10 backdrop-blur-xl border border-white/20 text-white"
                        } rounded-2xl px-4 py-3 shadow-lg`}>
                          <p className="text-sm leading-relaxed">{msg.text}</p>
                          <p className="text-xs opacity-70 mt-2">{msg.timestamp}</p>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl px-4 py-3">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input */}
                  <div className="p-6 border-t border-white/10 bg-white/5">
                    <div className="flex gap-3">
                      <input
                        className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 focus:border-cyan-500/50 focus:outline-none text-white rounded-2xl px-4 py-3 placeholder-gray-400 transition-all duration-300"
                        placeholder="Ask me about token swaps, yield farming, market analysis..."
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => e.key === "Enter" && sendMessage()}
                      />
                      <button
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                        onClick={sendMessage}
                        disabled={!input.trim()}
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}