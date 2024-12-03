export const mockTenders = [
  {
    id: '1',
    title: 'بناء مدرسة ابتدائية',
    description: 'مشروع بناء مدرسة ابتدائية تتكون من 12 قسماً مع مرافق رياضية وإدارية',
    budget: 150000000,
    location: 'الجزائر العاصمة',
    deadline: new Date('2024-06-30'),
    clientName: 'وزارة التربية الوطنية',
    status: 'open',
    category: 'بناء وتشييد',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    title: 'تجديد شبكة المياه',
    description: 'مشروع تجديد شبكة المياه الصالحة للشرب في حي باب الزوار',
    budget: 80000000,
    location: 'الجزائر العاصمة',
    deadline: new Date('2024-05-15'),
    clientName: 'مؤسسة المياه والتطهير',
    status: 'open',
    category: 'بنية تحتية',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    title: 'تطوير نظام معلوماتي',
    description: 'تطوير نظام معلوماتي لإدارة الموارد البشرية والرواتب',
    budget: 45000000,
    location: 'وهران',
    deadline: new Date('2024-04-20'),
    clientName: 'وزارة العمل',
    status: 'closed',
    category: 'تكنولوجيا المعلومات',
    createdAt: new Date(),
    updatedAt: new Date()
  }
] as const;