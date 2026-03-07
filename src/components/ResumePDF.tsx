/**
 * ResumePDF.tsx
 * 
 * This file does NOT render HTML to the screen. 
 * Instead, it uses a special library (`@react-pdf/renderer`) that takes React-like syntax
 * and compiles it directly into a downloadable PDF document.
 * 
 * This is very different from normal React components because you must use 
 * <Page>, <Text>, and <View> instead of <div>, <p>, or <h1>.
 */

import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Register a clean, professional font for the PDF.
// Without this, the PDF might look different depending on what fonts the user has installed.
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/helvetica@1.0.4/Helvetica.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/helvetica@1.0.4/Helvetica-Bold.ttf', fontWeight: 'bold' }
  ]
});

// Create styles specifically for the PDF. 
// Note that this looks like React Native styling (camelCase properties) rather than regular CSS.
const styles = StyleSheet.create({
  page: {
    padding: 50,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
    color: '#333333',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    paddingBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  contactInfo: {
    fontSize: 10,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#666666',
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: '#f0f0f0',
    padding: 5,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemSub: {
    fontSize: 10,
    color: '#444444',
    marginBottom: 5,
  },
  text: {
    fontSize: 10,
    lineHeight: 1.5,
    marginBottom: 3,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillTag: {
    fontSize: 9,
    backgroundColor: '#f0f0f0',
    padding: '3 8', // React-PDF requires string format for padding shorthand sometimes
    margin: 2,
    borderRadius: 3,
  }
});

// The actual PDF structure
const ResumePDF = () => (
  // <Document> represents the whole PDF file
  <Document>
    {/* <Page> represents a single physical page. size="A4" is standard for international resumes. */}
    <Page size="A4" style={styles.page}>
      
      {/* Header Section */}
      {/* <View> is the equivalent of a <div> in React-PDF */}
      <View style={styles.header}>
        {/* <Text> is the equivalent of a <p> or <span> */}
        <Text style={styles.name}>Jeff Gentapanan</Text>
        <View style={styles.contactInfo}>
          <Text>Igcocolo, Guimbal, Iloilo | 09276886821</Text>
          <Text>jeff.gentapanan2004525@gmail.com</Text>
        </View>
        <Text style={[styles.text, { marginTop: 5, fontSize: 9 }]}>
          LinkedIn: linkedin.com/in/jeff-gentapanan-4b76b8370 | GitHub: github.com/JeffGentapanan
        </Text>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.itemTitle}>Western Institute of Technology</Text>
        <Text style={styles.itemSub}>Bachelor of Science in Information Technology | 2022 - 2026</Text>
        <Text style={styles.text}>Current Student focusing on Software Development and Web Technologies.</Text>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.skillsGrid}>
          {/* Mapping an array directly inline to create tags */}
          {[
            'TypeScript', 'JavaScript', 'CSS3', 'HTML5', 'React 19', 
            'Framer Motion', 'React Bits', 'React Icons', '@react-pdf',
            'Vite', 'npm', 'ESLint', 'Git & GitHub', 'VS Code'
          ].map(skill => (
            <Text key={skill} style={styles.skillTag}>{skill}</Text>
          ))}
        </View>
      </View>

      {/* Projects Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Projects</Text>
        <Text style={styles.itemTitle}>Awesome Todo's App</Text>
        <Text style={styles.itemSub}>Full-Stack Task Management Application | Live: awesometodosapp-otag.onrender.com</Text>
        <Text style={styles.text}>
          Developed a full-stack application featuring a React frontend powered by Vite 
          and a Node.js/Express server. Implemented task persistence and a responsive 
          user interface for efficient task management.
        </Text>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.text}>
          Born on May 25, 2004, I am an IT student driven by a deep passion for 
          design and development. I enjoy the creative journey of building modern web 
          experiences that are both functional and visually engaging. I am constantly 
          learning and exploring new design trends to expand my knowledge and create 
          work that truly makes an impact.
        </Text>
      </View>

    </Page>
  </Document>
);

export default ResumePDF;
