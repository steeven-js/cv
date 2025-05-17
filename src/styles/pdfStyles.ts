// Styles partagés pour les rendus web et PDF
// Ces styles reproduisent les principales classes Tailwind utilisées dans les CV

// Couleurs correspondant aux couleurs Tailwind
export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  blue: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
  },
  pink: {
    500: '#EC4899',
  },
  purple: {
    500: '#8B5CF6',
  },
  slate: {
    200: '#E2E8F0',
    400: '#94A3B8',
    500: '#64748B',
  }
};

// Fontes
export const fonts = {
  sans: 'Helvetica',
  poppins: 'Helvetica', // Helvetica comme remplacement pour Poppins
};

// Tailles de texte
export const fontSize = {
  xs: 8,
  sm: 10,
  base: 12,
  md: 14,
  lg: 16,
  xl: 18,
  '2xl': 20,
  '3xl': 24,
};

// Espacements
export const spacing = {
  px: 1,
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
};

// Utilitaires pour faciliter la création de styles PDF
export const createStyleUtils = {
  flexDirection: {
    row: { flexDirection: 'row' },
    col: { flexDirection: 'column' },
  },
  justifyContent: {
    start: { justifyContent: 'flex-start' },
    center: { justifyContent: 'center' },
    end: { justifyContent: 'flex-end' },
    between: { justifyContent: 'space-between' },
  },
  alignItems: {
    start: { alignItems: 'flex-start' },
    center: { alignItems: 'center' },
    end: { alignItems: 'flex-end' },
  },
  fontWeight: {
    normal: { fontWeight: 'normal' },
    medium: { fontWeight: 'medium' },
    semibold: { fontWeight: 'semibold' },
    bold: { fontWeight: 'bold' },
  },
  textAlign: {
    left: { textAlign: 'left' },
    center: { textAlign: 'center' },
    right: { textAlign: 'right' },
  }
};

// Exemple de style composé pour un en-tête
export const headingStyles = {
  h1: {
    fontSize: fontSize['2xl'],
    fontWeight: 'bold',
    marginBottom: spacing[2],
    color: colors.gray[900],
  },
  h2: {
    fontSize: fontSize.xl,
    fontWeight: 'semibold',
    marginBottom: spacing[2],
    color: colors.pink[500],
  },
  h3: {
    fontSize: fontSize.base,
    fontWeight: 'semibold',
    marginBottom: spacing[3],
    color: colors.gray[900],
  },
};

// Mise en page
export const layoutStyles = {
  page: {
    padding: spacing[6],
    backgroundColor: colors.white,
    fontFamily: fonts.sans,
  },
  section: {
    marginBottom: spacing[4],
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
    marginVertical: spacing[2],
  },
};
