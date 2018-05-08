import Typography from "typography";

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.45,
    headerFontFamily: ['Cera-Bold', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Cera-Light', 'serif'],
    overrideStyles: () => ({
      html: {
        overflowY: 'initial',
      },
    })
  });
  
export default typography;
