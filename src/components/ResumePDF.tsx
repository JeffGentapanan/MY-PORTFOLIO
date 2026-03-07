import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/helvetica@1.0.4/Helvetica.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/helvetica@1.0.4/Helvetica-Bold.ttf', fontWeight: 'bold' }
  ]
});

const styles = StyleSheet.create({
  page: {
    padding: 50,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottom: 1,
    borderBottomColor: '#eeeeee',
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  contactInfo: {
    fontSize: 10,
    color: '#666666',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    marginTop: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    textTransform: 'uppercase',
    borderBottom: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 3,
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2,
  },
  itemSub: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 5,
    fontStyle: 'italic',
  },
  text: {
    fontSize: 10,
    color: '#444444',
    lineHeight: 1.5,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillTag: {
    fontSize: 9,
    backgroundColor: '#f0f0f0',
    padding: '3 8',
    margin: 2,
    borderRadius: 3,
  }
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>Jeff Gentapanan</Text>
        <View style={styles.contactInfo}>
          <Text>Igcocolo, Guimbal, Iloilo | 09276886821</Text>
          <Text>jeff.gentapanan2004525@gmail.com</Text>
        </View>
        <Text style={[styles.text, { marginTop: 5, fontSize: 9 }]}>
          LinkedIn: linkedin.com/in/jeff-gentapanan-4b76b8370 | GitHub: github.com/JeffGentapanan
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.itemTitle}>Western Institute of Technology</Text>
        <Text style={styles.itemSub}>Bachelor of Science in Information Technology | 2022 - 2026</Text>
        <Text style={styles.text}>Current Student focusing on Software Development and Web Technologies.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.skillsGrid}>
          {[
            'TypeScript', 'JavaScript', 'CSS3', 'HTML5', 'React 19',
            'Framer Motion', 'React Bits', 'React Icons', '@react-pdf',
            'Vite', 'npm', 'ESLint', 'Git & GitHub', 'VS Code'
          ].map(skill => (
            <Text key={skill} style={styles.skillTag}>{skill}</Text>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Projects</Text>
        <Text style={styles.itemTitle}>Awesome Todo's App</Text>
        <Text style={styles.itemSub}>Full-Stack Task Management Application | Live: awesometodosapp-otag.onrender.com</Text>
        <Text style={styles.text}>
          Developed a comprehensive task management app using a decoupled architecture 
          and a Node.js/Express server. Implemented task persistence and a responsive 
          user interface for efficient task management.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.text}>
          Born on May 25, 2004, I am an IT student driven by a deep passion for 
          design and development. I enjoy the creative journey of building modern web 
          experiences and am constantly expanding my knowledge in the MERN stack.
        </Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
