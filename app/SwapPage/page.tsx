'use client';
import { useState, useEffect } from "react";
import { ArrowUpDown, Zap, TrendingUp, Shield, Clock, Wallet, ArrowRight, RefreshCw, Settings, Info, CheckCircle2, AlertTriangle, Sparkles, Globe, Lock, BarChart3 } from "lucide-react";
import Navbar from "../components/Navbar";

const tokens = [
  { symbol: "AVAX", name: "Avalanche", price: 42.15, change: 5.2, logo: "🔺" },
  { symbol: "USDC", name: "USD Coin", price: 1.00, change: 0.1, logo: "💵" },
  { symbol: "ETH", name: "Ethereum", price: 3245.78, change: -2.1, logo: "⟐" },
  { symbol: "BTC", name: "Bitcoin", price: 68420.50, change: 3.8, logo: "₿" },
  { symbol: "LINK", name: "Chainlink", price: 18.65, change: 7.3, logo: "🔗" },
  { symbol: "UNI", name: "Uniswap", price: 12.34, change: -1.5, logo: "🦄" }
];

export default function SwapPage() {
  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken, setToToken] = useState(tokens[1]);
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [slippage, setSlippage] = useState("0.5");
  const [estimatedGas, setEstimatedGas] = useState(null);

  // Mock quote calculation
  useEffect(() => {
    if (amount && parseFloat(amount) > 0) {
      setShowQuote(true);
      const estimated = (parseFloat(amount) * fromToken.price) / toToken.price;
      setEstimatedGas(Math.random() * 50 + 10); // Mock gas estimation
    } else {
      setShowQuote(false);
    }
  }, [amount, fromToken, toToken]);

  const handleSwap = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Mock successful swap
    }, 2000);
  };

  const swapTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  const estimatedOutput = amount ? ((parseFloat(amount) * fromToken.price) / toToken.price).toFixed(6) : "0";

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s'}}></div>
        </div>

        <div className="relative z-10 px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">AI-Optimized Trading</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-100 to-emerald-200 bg-clip-text text-transparent mb-4">
                Intelligent Token Swaps
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience lightning-fast swaps with AI-powered routing and institutional-grade security
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Market Stats */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-cyan-400" />
                    Market Overview
                  </h3>
                  <div className="space-y-4">
                    {tokens.slice(0, 4).map((token) => (
                      <div key={token.symbol} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{token.logo}</span>
                          <div>
                            <p className="text-white font-medium">{token.symbol}</p>
                            <p className="text-gray-400 text-xs">{token.name}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-semibold">${token.price.toLocaleString()}</p>
                          <p className={`text-xs ${token.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {token.change >= 0 ? '+' : ''}{token.change}%
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-400" />
                    Security Features
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-gray-300 text-sm">Multi-sig Protection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-gray-300 text-sm">Real-time Monitoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-gray-300 text-sm">MEV Protection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-gray-300 text-sm">Slippage Guard</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Swap Interface */}
              <div className="lg:col-span-2">
                <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-6 border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                          <ArrowUpDown className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">Token Swap</h2>
                          <p className="text-cyan-300 text-sm">Powered by Turnkey Wallet</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                        <Settings className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* From Token */}
                    <div className="mb-6">
                      <label className="block text-white/80 text-sm font-medium mb-3">From</label>
                      <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 hover:border-cyan-500/30 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <select
                            className="bg-transparent text-white text-lg font-semibold outline-none appearance-none cursor-pointer"
                            value={fromToken.symbol}
                            onChange={e => setFromToken(tokens.find(t => t.symbol === e.target.value))}
                          >
                            {tokens.map(t => <option key={t.symbol} value={t.symbol} className="bg-slate-800">{t.symbol}</option>)}
                          </select>
                          <div className="text-right">
                            <p className="text-white/60 text-xs">Balance: 1,234.56</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{fromToken.logo}</span>
                            <div>
                              <p className="text-white font-medium">{fromToken.name}</p>
                              <p className="text-gray-400 text-xs">${fromToken.price.toLocaleString()}</p>
                            </div>
                          </div>
                          <input
                            type="number"
                            className="bg-transparent text-white text-right text-xl font-bold outline-none placeholder-gray-500 w-32"
                            placeholder="0.0"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Swap Button */}
                    <div className="flex justify-center mb-6">
                      <button
                        onClick={swapTokens}
                        className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 hover:border-cyan-500/50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <ArrowUpDown className="w-5 h-5 text-cyan-400" />
                      </button>
                    </div>

                    {/* To Token */}
                    <div className="mb-6">
                      <label className="block text-white/80 text-sm font-medium mb-3">To</label>
                      <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 hover:border-emerald-500/30 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <select
                            className="bg-transparent text-white text-lg font-semibold outline-none appearance-none cursor-pointer"
                            value={toToken.symbol}
                            onChange={e => setToToken(tokens.find(t => t.symbol === e.target.value))}
                          >
                            {tokens.map(t => <option key={t.symbol} value={t.symbol} className="bg-slate-800">{t.symbol}</option>)}
                          </select>
                          <div className="text-right">
                            <p className="text-white/60 text-xs">Balance: 567.89</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{toToken.logo}</span>
                            <div>
                              <p className="text-white font-medium">{toToken.name}</p>
                              <p className="text-gray-400 text-xs">${toToken.price.toLocaleString()}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white text-xl font-bold">
                              {estimatedOutput}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quote Information */}
                    {showQuote && (
                      <div className="mb-6 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Info className="w-4 h-4 text-cyan-400" />
                          <span className="text-cyan-300 font-medium text-sm">Swap Details</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-white/60 text-xs">Rate</p>
                            <p className="text-white text-sm font-semibold">
                              1 {fromToken.symbol} = {(fromToken.price / toToken.price).toFixed(4)} {toToken.symbol}
                            </p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs">Slippage</p>
                            <p className="text-emerald-400 text-sm font-semibold">{slippage}%</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs">Network Fee</p>
                            <p className="text-white text-sm font-semibold">
                              {estimatedGas ? `~$${estimatedGas.toFixed(2)}` : 'Calculating...'}
                            </p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs">Route</p>
                            <p className="text-cyan-400 text-sm font-semibold">Optimized</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Swap Button */}
                    <button
                      onClick={handleSwap}
                      disabled={!amount || parseFloat(amount) <= 0 || isLoading}
                      className="w-full bg-gradient-to-r from-cyan-500 to-emerald-600 hover:from-cyan-600 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isLoading ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          Processing Swap...
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5" />
                          Execute Swap
                        </>
                      )}
                    </button>

                    {/* Benefits Section */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="text-center mb-4">
                        <h3 className="text-white font-semibold mb-2 flex items-center justify-center gap-2">
                          <Globe className="w-4 h-4 text-cyan-400" />
                          Why Choose SwapZilla?
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">Best Rates</p>
                            <p className="text-gray-400 text-xs">AI-optimized routing</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                            <Clock className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">Instant Swaps</p>
                            <p className="text-gray-400 text-xs">Sub-second execution</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                            <Lock className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">Secure</p>
                            <p className="text-gray-400 text-xs">Turnkey integration</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">AI Support</p>
                            <p className="text-gray-400 text-xs">24/7 assistance</p>
                          </div>
                        </div>
                      </div>
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