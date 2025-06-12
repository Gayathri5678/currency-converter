import React from 'react';
import { Mic, MicOff } from 'lucide-react';
import { useVoiceRecognition } from '../hooks/useVoiceRecognition';

interface VoiceInputProps {
  onResult: (amount: string) => void;
  className?: string;
}

const VoiceInput: React.FC<VoiceInputProps> = ({ onResult, className = '' }) => {
  const { startListening, isListening, error, isSupported } = useVoiceRecognition();

  const handleVoiceInput = () => {
    if (!isSupported) {
      alert('Voice recognition is not supported in your browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    startListening(onResult);
  };

  if (!isSupported) {
    return null;
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <button
        onClick={handleVoiceInput}
        disabled={isListening}
        className={`
          p-3 rounded-full transition-all duration-300 
          ${isListening 
            ? 'bg-red-500 text-white pulse-gold' 
            : 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 gold-glow'
          }
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
        title={isListening ? 'Listening...' : 'Click to speak amount'}
      >
        {isListening ? <MicOff size={20} /> : <Mic size={20} />}
      </button>
      
      {isListening && (
        <div className="mt-2 text-sm text-yellow-400 font-inter animate-pulse">
          Listening... Speak the amount
        </div>
      )}
      
      {error && (
        <div className="mt-2 text-sm text-red-400 font-inter">
          {error}
        </div>
      )}
    </div>
  );
};

export default VoiceInput;