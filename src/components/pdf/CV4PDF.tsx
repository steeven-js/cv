import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import PDFPreview from './PDFPreview';
import { 
  personalInfoCV4, 
  contactInfoCV4, 
  skillsCV4, 
  experiencesCV4, 
  formationsCV4, 
  softSkillsCV4,
  contextCV4,
  languesCV4
} from '../../data/data4';

// Styles for the PDF document
const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 8,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'medium',
    marginBottom: 8,
    color: '#1D4ED8',
  },
  summary: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.4,
    marginBottom: 5,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB',
    marginVertical: 10,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  mainColumn: {
    width: '60%',
    paddingRight: 8,
  },
  sidebar: {
    width: '40%',
    backgroundColor: '#F9FAFB',
    padding: 8,
    borderRadius: 3,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 2,
    marginBottom: 6,
  },
  experienceItem: {
    marginBottom: 8,
  },
  positionCompany: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1D4ED8',
  },
  roleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  roleText: {
    fontSize: 8,
    fontStyle: 'italic',
    color: '#374151',
  },
  periodText: {
    fontSize: 7,
    color: '#4B5563',
    backgroundColor: '#F3F4F6',
    borderRadius: 2,
    padding: 2,
  },
  achievementsList: {
    marginTop: 3,
    paddingLeft: 10,
  },
  achievementItem: {
    fontSize: 8,
    color: '#374151',
    marginBottom: 1,
    position: 'relative',
  },
  bullet: {
    position: 'absolute',
    fontSize: 8,
    left: -7,
    top: 0,
  },
  formationItem: {
    marginBottom: 5,
  },
  formationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formationTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#111827',
  },
  formationYear: {
    fontSize: 7,
    color: '#4B5563',
  },
  formationInstitution: {
    fontSize: 7,
    color: '#374151',
  },
  twoColumnGrid: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 5,
  },
  halfColumn: {
    width: '50%',
  },
  langueItem: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 3,
  },
  contactItem: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 3,
  },
  skillGroup: {
    marginBottom: 7,
  },
  skillCategory: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#1D4ED8',
    marginBottom: 2,
  },
  skillItem: {
    fontSize: 8,
    color: '#374151',
    marginBottom: 2,
    paddingLeft: 7,
  },
  footer: {
    marginTop: 10,
    paddingTop: 3,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    textAlign: 'center',
    fontSize: 6,
    fontStyle: 'italic',
    color: '#6B7280',
  },
});

// Create the PDF Document component
const CV4Document = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{personalInfoCV4.name}</Text>
        <Text style={styles.subtitle}>{personalInfoCV4.title}</Text>
        <Text style={styles.summary}>{personalInfoCV4.summary}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.container}>
        {/* Main Column */}
        <View style={styles.mainColumn}>
          {/* Experience Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Expérience Professionnelle</Text>
            {experiencesCV4.map((exp, index) => (
              <View key={index} style={styles.experienceItem}>
                <Text style={styles.positionCompany}>{exp.position} - {exp.company}</Text>
                <View style={styles.roleRow}>
                  <Text style={styles.roleText}>{exp.role}</Text>
                  <Text style={styles.periodText}>{exp.period}</Text>
                </View>
                <View style={styles.achievementsList}>
                  {exp.achievements.map((achievement, i) => (
                    <View key={i} style={styles.achievementItem}>
                      <Text style={styles.bullet}>•</Text>
                      <Text>{achievement}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* Formation Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Formation</Text>
            <View style={{ gap: 4 }}>
              {formationsCV4.map((formation, index) => (
                <View key={index} style={styles.formationItem}>
                  <View style={styles.formationHeader}>
                    <Text style={styles.formationTitle}>{formation.title}</Text>
                    <Text style={styles.formationYear}>{formation.year}</Text>
                  </View>
                  <Text style={styles.formationInstitution}>{formation.institution}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Langues et Contact */}
          <View style={styles.twoColumnGrid}>
            <View style={styles.halfColumn}>
              <Text style={styles.sectionTitle}>Langues</Text>
              {languesCV4.map((langue, index) => (
                <Text key={index} style={styles.langueItem}>
                  <Text style={{ fontWeight: 'bold' }}>{langue.name}: </Text>
                  {langue.level}
                </Text>
              ))}
            </View>

            <View style={styles.halfColumn}>
              <Text style={styles.sectionTitle}>Contact</Text>
              {contactInfoCV4.map((contact, index) => (
                <Text key={index} style={styles.contactItem}>{contact.value}</Text>
              ))}
            </View>
          </View>
        </View>

        {/* Sidebar */}
        <View style={styles.sidebar}>
          {/* Skills */}
          <Text style={styles.sectionTitle}>Compétences Techniques</Text>
          <View style={{ marginBottom: 8 }}>
            {skillsCV4.map((skillGroup, groupIndex) => (
              <View key={groupIndex} style={styles.skillGroup}>
                <Text style={styles.skillCategory}>{skillGroup.category}</Text>
                {skillGroup.items.map((item, itemIndex) => (
                  <View key={itemIndex} style={styles.skillItem}>
                    <Text>• {item}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>

          {/* Soft Skills */}
          <Text style={styles.sectionTitle}>Savoir-être Professionnels</Text>
          <View style={{ marginBottom: 8 }}>
            {softSkillsCV4.map((skill, index) => (
              <View key={index} style={styles.skillItem}>
                <Text>• {skill}</Text>
              </View>
            ))}
          </View>

          {/* Context */}
          <Text style={styles.sectionTitle}>Contexte de Travail</Text>
          <View>
            {contextCV4.map((item, index) => (
              <View key={index} style={styles.skillItem}>
                <Text>• {item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>Ce CV a été adapté conformément à la fiche métier M1861 - Développeur/Développeuse logiciel ou d'application.</Text>
      </View>
    </Page>
  </Document>
);

// Export the document for preview
export { CV4Document };

// Export the PDF download component with preview
const CV4PDF = () => (
  <div className="flex space-x-3">
    <PDFDownloadLink 
      document={<CV4Document />} 
      fileName="cv4.pdf"
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 inline-flex items-center"
    >
      {({ loading }) => (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {loading ? 'Génération du PDF...' : 'Télécharger en PDF'}
        </>
      )}
    </PDFDownloadLink>
    <PDFPreview document={<CV4Document />} buttonLabel="Aperçu PDF" />
  </div>
);

export default CV4PDF;
