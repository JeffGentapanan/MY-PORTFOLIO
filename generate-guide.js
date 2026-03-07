
import React from 'react';
import ReactPDF, { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Register fonts
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/helvetica@1.0.4/Helvetica.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/helvetica@1.0.4/Helvetica-Bold.ttf', fontWeight: 'bold' }
  ]
});

const styles = StyleSheet.create({
  page: { padding: 40, backgroundColor: '#ffffff', fontFamily: 'Helvetica', color: '#333' },
  header: { marginBottom: 20, borderBottomWidth: 2, borderBottomColor: '#000', paddingBottom: 10 },
  title: { fontSize: 22, fontWeight: 'bold', textTransform: 'uppercase' },
  subtitle: { fontSize: 10, color: '#666', marginTop: 5 },
  section: { marginTop: 15, marginBottom: 5 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', backgroundColor: '#f0f0f0', padding: 5, marginBottom: 8 },
  stepTitle: { fontSize: 11, fontWeight: 'bold', color: '#000', marginTop: 8 },
  text: { fontSize: 9, lineHeight: 1.5, marginBottom: 4 },
  bold: { fontWeight: 'bold' },
  code: { backgroundColor: '#f5f5f5', padding: 6, marginVertical: 4, borderRadius: 2, fontSize: 8, fontFamily: 'Courier' }
});

const Guide = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Full Website Creation Guide</Text>
        <Text style={styles.subtitle}>Project: Jeff Gentapanan Portfolio | Built with React, TypeScript & Framer Motion</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Phase 1: Environment & Initialization</Text>
        <Text style={styles.stepTitle}>1. Install Prerequisites</Text>
        <Text style={styles.text}>Install Node.js (LTS version) and Visual Studio Code. Verify installation by running 'node -v' in your terminal.</Text>
        
        <Text style={styles.stepTitle}>2. Scaffold the Project</Text>
        <Text style={styles.text}>We used Vite for its speed and modern features. In the terminal, run:</Text>
        <View style={styles.code}><Text>npm create vite@latest jeff-portfolio -- --template react-ts</Text></View>
        
        <Text style={styles.stepTitle}>3. Install Core Libraries</Text>
        <Text style={styles.text}>Navigate to the folder and install the following packages:</Text>
        <View style={styles.code}><Text>npm install framer-motion react-icons @react-pdf/renderer @react-spring/web</Text></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Phase 2: Global Design System</Text>
        <Text style={styles.stepTitle}>1. CSS Reset & Variables (global.css)</Text>
        <Text style={styles.text}>Create a 'src/styles/global.css' file. Define CSS variables for colors (--bg, --accent) and typography. This ensures a consistent "Minimalist Dark" theme across the whole site.</Text>
        
        <Text style={styles.stepTitle}>2. Entry Point (main.tsx)</Text>
        <Text style={styles.text}>Configure 'main.tsx' to find the 'root' div in 'index.html' and inject the 'App' component using 'ReactDOM.createRoot'.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Phase 3: Component Architecture</Text>
        <Text style={styles.text}>Break the UI into small, manageable files in 'src/components/':</Text>
        <Text style={styles.text}>• <Text style={styles.bold}>Header</Text>: Fixed navigation bar with glassmorphism (blur) effect.</Text>
        <Text style={styles.text}>• <Text style={styles.bold}>Hero</Text>: The intro section featuring the large name heading.</Text>
        <Text style={styles.text}>• <Text style={styles.bold}>Projects</Text>: A grid layout showing project previews inside browser-mockup frames.</Text>
        <Text style={styles.text}>• <Text style={styles.bold}>Skills</Text>: 3D Tilt cards displaying your tech stack with official logos.</Text>
        <Text style={styles.text}>• <Text style={styles.bold}>Contact</Text>: A responsive form with side-by-side info and input fields.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Phase 4: Advanced Animations (React Bits)</Text>
        <Text style={styles.stepTitle}>1. Interactive Background</Text>
        <Text style={styles.text}>Created 'Waves.tsx' using HTML5 Canvas. It draws flowing lines that react to the mouse cursor position globally.</Text>
        
        <Text style={styles.stepTitle}>2. Mouse Interactions</Text>
        <Text style={styles.text}>Implemented 'Magnet.tsx' (uses math to pull elements toward the mouse) and 'SpotlightCard.tsx' (uses radial-gradients for a flashlight effect).</Text>
        
        <Text style={styles.stepTitle}>3. Text Effects</Text>
        <Text style={styles.text}>Implemented 'DecryptedText.tsx' which uses a scrambling algorithm to reveal text character-by-character when it enters the view.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Phase 5: Technical Features & Polish</Text>
        <Text style={styles.stepTitle}>1. PDF Generation</Text>
        <Text style={styles.text}>Used '@react-pdf/renderer' to build 'ResumePDF.tsx'. This creates a real PDF document using React components instead of HTML, allowing for high-quality downloads.</Text>
        
        <Text style={styles.stepTitle}>2. Custom Cursor</Text>
        <Text style={styles.text}>Created a Global 'CustomCursor.tsx' that follows the mouse and expands when hovering over buttons using Framer Motion's 'animate' prop.</Text>
        
        <Text style={styles.stepTitle}>3. Quality Control (ESLint & TS)</Text>
        <Text style={styles.text}>Ran 'npm run lint' to fix all coding errors and 'npm run build' to generate the production-ready 'dist' folder.</Text>
      </View>
    </Page>
  </Document>
);

ReactPDF.renderToFile(<Guide />, 'Project-Creation-Guide.pdf');
console.log('PDF Generated Successfully!');
