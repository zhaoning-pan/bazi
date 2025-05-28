import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  birthDate: string;
  birthTime: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthDate: '',
    birthTime: '',
  });
  const [analysis, setAnalysis] = useState<string>('');
  const [showSubscribe, setShowSubscribe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate detailed analysis based on the input
    const detailedAnalysis = generateDetailedAnalysis(formData);
    setAnalysis(detailedAnalysis);
    
    // Show subscription popup after analysis
    setTimeout(() => setShowSubscribe(true), 3000);
  };

  const generateDetailedAnalysis = (data: FormData) => {
    return `Dear ${data.name}, based on your birth date ${data.birthDate} and time ${data.birthTime}, here is your detailed Bazi analysis:

Life Element (Day Master):
Your Day Master represents your core personality and how you present yourself to the world. Based on your birth time, you possess strong characteristics that influence your life path significantly.

Destiny Palace Analysis:
1. Career Palace
- Your career path shows promising opportunities in creative fields
- Leadership positions are favored in your chart
- Best career periods: Ages 28-35 and 40-48

2. Wealth Palace
- Natural ability to attract wealth and resources
- Favorable periods for investments: 2025-2027
- Need to be cautious with speculative investments in metal-related industries

3. Relationship Palace
- Strong indicators for meaningful relationships
- Potential for marriage during favorable water years
- Focus on communication in relationships will be crucial

4. Health Palace
- Generally good constitution with some considerations
- Pay attention to digestive health
- Recommended health practices based on your element

Ten-Year Luck Cycles:
Your current luck cycle indicates a period of significant transformation. The next decade brings opportunities for:
- Career advancement through networking
- Wealth accumulation through strategic partnerships
- Personal growth through spiritual pursuits

Annual Influences:
2024-2025 Outlook:
- Career: Excellent prospects for advancement
- Relationships: Period of stability and growth
- Health: Maintain regular exercise routine
- Wealth: Favorable for long-term investments

Recommendations:
1. Career Development
- Best months for career moves: March, September
- Focus on leadership roles in collaborative environments
- Develop skills in communication and technology

2. Personal Growth
- Meditation and reflection will be particularly beneficial
- Study opportunities will yield positive results
- Travel directions: South and East are favorable

3. Relationship Guidance
- Build strong networks in professional circles
- Nurture existing relationships with regular communication
- Best months for relationship developments: April, August

4. Health Management
- Regular exercise in the morning hours
- Diet recommendations based on your element
- Stress management through creative activities

5. Wealth Management
- Investment opportunities in technology sectors
- Property investments favored in specific locations
- Avoid speculative investments in certain months

This analysis represents the major influences in your life based on traditional Bazi principles. Remember that while these insights provide guidance, personal choice and effort remain crucial factors in shaping your destiny.`;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Chinese Fortune Telling Website
      </h1>

      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Birth Date</label>
            <input
              type="date"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Birth Time</label>
            <input
              type="time"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.birthTime}
              onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Get Reading
          </button>
        </form>
      </div>

      {analysis && (
        <div className="max-w-2xl mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Your Bazi Analysis</h2>
          <div className="whitespace-pre-line">{analysis}</div>
        </div>
      )}

      <AnimatePresence>
        {showSubscribe && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Subscribe for More Insights</h2>
              <p className="mb-4">
                Get monthly updates and detailed analysis of your fortune directly in your inbox!
              </p>
              <button
                onClick={() => setShowSubscribe(false)}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;