import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import PDFPreview from './PDFPreview';
import { personalInfo, contactInfo, formations, skills, experiences } from '../../data/data1';

// Styles for the PDF document
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 10,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#EC4899',
  },
  contactRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  contactText: {
    fontSize: 10,
    color: '#6B7280',
    marginLeft: 5,
  },
  summary: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 8,
    marginBottom: 15,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  leftColumn: {
    width: '30%',
    paddingRight: 10,
  },
  rightColumn: {
    width: '70%',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#111827',
  },
  itemYear: {
    fontSize: 8,
    color: '#8B5CF6',
    marginBottom: 2,
  },
  itemTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#6B7280',
  },
  itemSubtitle: {
    fontSize: 8,
    color: '#9CA3AF',
  },
  itemContainer: {
    marginBottom: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginVertical: 5,
  },
  experienceContainer: {
    marginBottom: 15,
  },
  positionText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#6B7280',
  },
  companyText: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  periodText: {
    fontSize: 8,
    color: '#8B5CF6',
    marginBottom: 2,
  },
  descriptionText: {
    fontSize: 8,
    color: '#9CA3AF',
    marginTop: 2,
  },
});

// Create the PDF Document component
const CV2Document = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>{personalInfo.name}</Text>
        <Text style={styles.subtitle}>{personalInfo.title}</Text>
      </View>

      {/* Contact and Summary Section */}
      <View style={[styles.section, { flexDirection: 'row' }]}>
        <View style={{ width: '40%' }}>
          {contactInfo.map((contact, index) => (
            <View key={index} style={styles.contactRow}>
              <Text style={styles.contactText}>{contact.value}</Text>
            </View>
          ))}
        </View>
        <View style={{ width: '60%' }}>
          <Text style={styles.summary}>{personalInfo.summary}</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.container}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          {/* Formation Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Formation</Text>
            {formations.map((formation, index) => (
              <View key={index} style={styles.itemContainer}>
                <Text style={styles.itemYear}>{formation.year}</Text>
                <Text style={styles.itemTitle}>{formation.title}</Text>
                <Text style={styles.itemSubtitle}>{formation.institution}</Text>
                {index < formations.length - 1 && <View style={styles.divider} />}
              </View>
            ))}
          </View>

          {/* Skills Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            {skills.map((skill, index) => (
              <View key={index} style={styles.itemContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.itemTitle}>{skill.name}</Text>
                  <Text style={[styles.itemYear, { marginLeft: 5 }]}>{skill.experience}</Text>
                </View>
                <Text style={styles.itemSubtitle}>{skill.description}</Text>
                {index < skills.length - 1 && <View style={styles.divider} />}
              </View>
            ))}
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experiences.map((exp, index) => (
            <View key={index} style={styles.experienceContainer}>
              <Text style={styles.periodText}>{exp.period}</Text>
              <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                <Text style={styles.positionText}>{exp.position}</Text>
                <Text style={styles.companyText}> @{exp.company}</Text>
              </View>
              <Text style={styles.descriptionText}>{exp.description}</Text>
              {index < experiences.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

// Export the document for preview
export { CV2Document };

// Export the PDF download component with preview
const CV2PDF = () => (
  <div className="flex space-x-2">
    <PDFDownloadLink document={<CV2Document />} fileName="cv2.pdf">
      {({ loading }) => 
        loading ? 'Génération du PDF...' : 'Télécharger en PDF'
      }
    </PDFDownloadLink>
    <PDFPreview document={<CV2Document />} />
  </div>
);

export default CV2PDF;
