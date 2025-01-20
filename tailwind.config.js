/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        'background-blue':"#edf2f9",
        'header-font': '#2c7be5',
        'modal-background' : 'rgba(0,0,0,0.5)',
        'modal-input-background' : "#f0f0f0",
        'button-green': "#3cd070",
        'task-c-background':'#4cd964',
        'toDoText' : '#07bc0c',
        'task-in-background' : '#f9f9f9',
        'text-Input-background' : '#b4c3e1',
        'btn-background' : '#2c7be5',
        'Cred-Inpu-background': '#dee5f2'
      },
      fontFamily: {
        poppins: ['Poppins-Regular'],
        quicksand: ['Quicksand-Regular'],
        montserrat: ['Montserrat-Regular'],
        opensans: ['OpenSans-Regular'],
        pacifico: ['Pacifico-Regular'],

    },
  }
  },
  plugins: [],
}

