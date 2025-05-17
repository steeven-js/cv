import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import PDFPreview from './PDFPreview';
import { personalInfo, contactInfo, formations, skills, experiences } from '../../data/data';
import { colors, fontSize, spacing, fonts } from '../../styles/pdfStyles';

// Styles for the PDF document - Tailwind-like styles
const styles = StyleSheet.create({
  page: {
    padding: spacing[6],
    backgroundColor: colors.white,
    fontFamily: fonts.sans,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: fontSize['2xl'],
    fontWeight: 'bold',
    marginBottom: spacing[1],
    color: colors.gray[900],
    fontFamily: fonts.sans,
  },
  subtitle: {
    fontSize: fontSize.xl,
    fontWeight: 'bold',
    marginBottom: spacing[2],
    color: colors.pink[500],
    fontFamily: fonts.sans,
  },
  contactRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  contactText: {
    fontSize: fontSize.sm,
    color: colors.slate[500],
    marginLeft: spacing[1],
  },
  summary: {
    fontSize: fontSize.sm,
    color: colors.slate[500],
    marginTop: spacing[2],
    marginBottom: spacing[4],
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
    fontSize: fontSize.base,
    fontWeight: 'bold',
    marginBottom: spacing[2],
    color: colors.gray[900],
  },
  itemYear: {
    fontSize: fontSize.xs,
    color: colors.purple[500],
    marginBottom: spacing[0.5],
  },
  itemTitle: {
    fontSize: fontSize.sm,
    fontWeight: 'bold',
    color: colors.slate[500],
  },
  itemSubtitle: {
    fontSize: fontSize.xs,
    color: colors.slate[400],
  },
  itemContainer: {
    marginBottom: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
    marginVertical: spacing[1],
  },
  experienceContainer: {
    marginBottom: 15,
  },
  positionText: {
    fontSize: fontSize.sm,
    fontWeight: 'bold',
    color: colors.slate[500],
  },
  companyText: {
    fontSize: fontSize.sm,
    color: colors.slate[400],
  },
  periodText: {
    fontSize: fontSize.xs,
    color: colors.purple[500],
    marginBottom: spacing[0.5],
  },
  descriptionText: {
    fontSize: fontSize.xs,
    color: colors.slate[400],
    marginTop: spacing[0.5],
  },
});

// Create the PDF Document component
const CV1Document = () => (
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
export { CV1Document };

// Export the PDF download component with preview
const CV1PDF = () => (
  <div className="flex space-x-2">
    <PDFDownloadLink document={<CV1Document />} fileName="cv1.pdf">
      {({ loading }) => 
        loading ? 'Génération du PDF...' : 'Télécharger en PDF'
      }
    </PDFDownloadLink>
    <PDFPreview document={<CV1Document />} />
  </div>
);

export default CV1PDF;
