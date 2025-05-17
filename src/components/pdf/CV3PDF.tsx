import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import PDFPreview from './PDFPreview';
import { personalInfo, contactInfo, formations, skills, experiences } from '../../data/data';

// Styles for the PDF document
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#F9FAFB',
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#D1D5DB',
    paddingBottom: 15,
    marginBottom: 15,
  },
  headerLeft: {
    width: '60%',
  },
  headerRight: {
    width: '40%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'medium',
    color: '#2563EB',
    marginTop: 3,
  },
  contactRow: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
  contactText: {
    fontSize: 8,
    color: '#4B5563',
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  summaryText: {
    fontSize: 9,
    color: '#4B5563',
    lineHeight: 1.5,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
  },
  leftColumn: {
    width: '50%',
    paddingRight: 10,
  },
  rightColumn: {
    width: '50%',
  },
  experienceItem: {
    marginBottom: 12,
    borderLeftWidth: 2,
    borderLeftColor: '#2563EB',
    paddingLeft: 8,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  positionText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  companyText: {
    fontSize: 9,
    fontStyle: 'italic',
    color: '#4B5563',
  },
  periodBadge: {
    fontSize: 7,
    color: '#1E40AF',
    backgroundColor: '#DBEAFE',
    padding: 3,
    borderRadius: 2,
  },
  expDescription: {
    fontSize: 8,
    color: '#4B5563',
    marginTop: 4,
  },
  educationItem: {
    marginBottom: 8,
  },
  educationYear: {
    fontSize: 8,
    color: '#2563EB',
  },
  educationTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  educationInstitution: {
    fontSize: 8,
    color: '#4B5563',
  },
  skillItem: {
    marginBottom: 8,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  skillName: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  skillExperience: {
    fontSize: 8,
    color: '#2563EB',
  },
  skillDescription: {
    fontSize: 8,
    color: '#4B5563',
  },
});

// Create the PDF Document component
const CV3Document = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.title}>{personalInfo.name}</Text>
          <Text style={styles.subtitle}>{personalInfo.title}</Text>
        </View>
        <View style={styles.headerRight}>
          {contactInfo.map((contact, index) => (
            <View key={index} style={styles.contactRow}>
              <Text style={styles.contactText}>{contact.value}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profil</Text>
        <Text style={styles.summaryText}>{personalInfo.summary}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Expérience Professionnelle</Text>
        {experiences.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <View style={styles.expHeader}>
              <View>
                <Text style={styles.positionText}>{exp.position}</Text>
                <Text style={styles.companyText}>{exp.company}</Text>
              </View>
              <Text style={styles.periodBadge}>{exp.period}</Text>
            </View>
            <Text style={styles.expDescription}>{exp.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.container}>
        {/* Left Column - Education */}
        <View style={styles.leftColumn}>
          <Text style={styles.sectionTitle}>Formation</Text>
          {formations.map((formation, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.educationYear}>{formation.year}</Text>
              <Text style={styles.educationTitle}>{formation.title}</Text>
              <Text style={styles.educationInstitution}>{formation.institution}</Text>
            </View>
          ))}
        </View>

        {/* Right Column - Skills */}
        <View style={styles.rightColumn}>
          <Text style={styles.sectionTitle}>Compétences</Text>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillItem}>
              <View style={styles.skillHeader}>
                <Text style={styles.skillName}>{skill.name}</Text>
                <Text style={styles.skillExperience}>{skill.experience}</Text>
              </View>
              <Text style={styles.skillDescription}>{skill.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

// Export the document for preview
export { CV3Document };

// Export the PDF download component with preview
const CV3PDF = () => (
  <div className="flex space-x-2">
    <PDFDownloadLink document={<CV3Document />} fileName="cv3.pdf">
      {({ loading }) => 
        loading ? 'Génération du PDF...' : 'Télécharger en PDF'
      }
    </PDFDownloadLink>
    <PDFPreview document={<CV3Document />} />
  </div>
);

export default CV3PDF;
