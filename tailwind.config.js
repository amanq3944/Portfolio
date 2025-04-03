module.exports = {
    theme: {
      extend: {
        keyframes: {
          pulseColor: {
            '0%, 100%': { backgroundColor: '#ef4444' }, /* Red */
            '50%': { backgroundColor: '#3b82f6' } /* Blue */
          },
          slideText: {
            '0%': { opacity: '0', transform: 'translateY(100%)' },
            '10%': { opacity: '1', transform: 'translateY(0%)' },
            '30%': { opacity: '1', transform: 'translateY(0%)' },
            '40%': { opacity: '0', transform: 'translateY(-100%)' },
            '100%': { opacity: '0', transform: 'translateY(-100%)' },
          },
        },
        animation: {
          slideText: 'slideText 6s infinite',
          'pulse-color': 'pulseColor 1.5s infinite',
        },
      },
    },
    plugins: [],
  };
  