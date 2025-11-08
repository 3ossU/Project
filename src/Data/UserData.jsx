const users = [
    {
        id: 1,
        userId: 'U001',
        name: 'สมชาย ใจดี',
        role: 'Seller'
    },
    {
        id: 2,
        userId: 'U002',
        name: 'สมหญิง รักดี',
        role: 'Buyer'
    },
    {
        id: 3,
        userId: 'U003',
        name: 'อนันต์ มั่งมี',
        role: 'Seller'
    },
    {
        id: 4,
        userId: 'U004',
        name: 'กมลวรรณ สุขใจ',
        role: 'Buyer'
    },
    {
        id: 5,
        userId: 'U005',
        name: 'ชาญชัย พันธุ์ดี',
        role: 'Seller'
    },
    {
        id: 6,
        userId: 'U006',
        name: 'สุพัตรา มีสุข',
        role: 'Buyer'
    },
    {
        id: 7,
        userId: 'U007',
        name: 'วรากร ตั้งใจ',
        role: 'Seller'
    },
    {
        id: 8,
        userId: 'U008',
        name: 'มณีรัตน์ สดใส',
        role: 'Buyer'
    },
    {
        id: 9,
        userId: 'U009',
        name: 'พงศกร จิตดี',
        role: 'Seller'
    },
    {
        id: 10,
        userId: 'U010',
        name: 'สุทธิดา น่ารัก',
        role: 'Buyer'
    },
    {
        id: 11,
        userId: 'U011',
        name: 'กิตติศักดิ์ แก้วใส',
        role: 'Seller'
    },
    {
        id: 12,
        userId: 'U012',
        name: 'ปวีณา รัตน์รุ่ง',
        role: 'Buyer'
    },
    {
        id: 13,
        userId: 'U013',
        name: 'ณัฐพล พูนทรัพย์',
        role: 'Seller'
    },
    {
        id: 14,
        userId: 'U014',
        name: 'อรอนงค์ อิ่มสุข',
        role: 'Buyer'
    },
    {
        id: 15,
        userId: 'U015',
        name: 'ธีรเดช ใจงาม',
        role: 'Seller'
    },
    {
        id: 16,
        userId: 'U016',
        name: 'สุดารัตน์ สายทอง',
        role: 'Buyer'
    },
    {
        id: 17,
        userId: 'U017',
        name: 'วรพงษ์ อินทร',
        role: 'Seller'
    },
    {
        id: 18,
        userId: 'U018',
        name: 'พิมพ์ชนก วงศ์ดี',
        role: 'Buyer'
    },
    {
        id: 19,
        userId: 'U019',
        name: 'ศุภชัย เก่งกล้า',
        role: 'Seller'
    },
    {
        id: 20,
        userId: 'U020',
        name: 'อัญชัน สุขสันต์',
        role: 'Buyer'
    }
];

export const fetchUsers = () => {
    return users.slice(0, 10);
}

