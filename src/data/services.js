// Google Drive image helper – using lh3.googleusercontent.com for fast direct embedding
const gd = (id) => `https://lh3.googleusercontent.com/d/${id}=w600`;

// ── Fallback ─────────────────────────────────────────────
const FALLBACK_IMG = gd('19Dnot_BIIFsZ6bEIevPfzl67Qtt271Q3');

// ── Categories ───────────────────────────────────────────
export const categories = [
  { id: 'wedding', name: 'Wedding', tagline: 'Eternal Romance', icon: '💍', image: gd('19Dnot_BIIFsZ6bEIevPfzl67Qtt271Q3') },
  { id: 'birthday', name: 'Birthday', tagline: 'Joyful Spirits', icon: '🎂', image: gd('1jkusVpSWrBb0sT9hEQAtYEcw62NS4M41') },
  { id: 'anniversary', name: 'Anniversary', tagline: 'Timeless Love', icon: '💝', image: gd('1AsA5F_FgLObqrRWwBsrMVkaqy7r0-IMh') },
  { id: 'baby-shower', name: 'Baby Shower', tagline: 'New Beginnings', icon: '👶', image: gd('1ClDiclQVGFYvrrK0be1ev4GDSyKOFZhW') },
  { id: 'party', name: 'Party', tagline: 'Electric Nights', icon: '🎉', image: gd('1uFYOoAgum0Pz2HBemgZ3pNwa-ljRlycv') },
];

// ── Services ─────────────────────────────────────────────
export const services = [
  // Decoration
  { id: 's1', name: 'Floral Decoration', category: 'decoration', price: 15000, image: gd('11X5REXNOGsi1-paBiiNCFXHvlaOwU0Z2'), description: 'Premium floral arrangements with imported roses, orchids and lilies.' },
  { id: 's2', name: 'Balloon Decoration', category: 'decoration', price: 8000, image: gd('1jkusVpSWrBb0sT9hEQAtYEcw62NS4M41'), description: 'Custom balloon arches, columns and themed balloon setups.' },
  { id: 's3', name: 'LED & Fairy Lights', category: 'decoration', price: 12000, image: gd('1uFYOoAgum0Pz2HBemgZ3pNwa-ljRlycv'), description: 'Ambient lighting with LED curtains, fairy lights and chandeliers.' },
  { id: 's4', name: 'Stage Setup', category: 'decoration', price: 25000, image: gd('1BnbKauymyDE2CYHXyy6a_-zeh0nFg9gJ'), description: 'Complete stage design with backdrops, draping and props.' },
  // Catering
  { id: 's5', name: 'Veg Catering (100 pax)', category: 'catering', price: 35000, image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80', description: 'Multi-cuisine vegetarian buffet with live counters.' },
  { id: 's6', name: 'Non-Veg Catering (100 pax)', category: 'catering', price: 45000, image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', description: 'Premium non-veg spread with tandoor, biryani and more.' },
  // Photography
  { id: 's7', name: 'Premium Photography', category: 'photography', price: 30000, image: gd('1lyRjAJyDzdDmKESo4Lz0hJmKxHERhvtE'), description: 'Candid + traditional photography with 500+ edited photos.' },
  { id: 's8', name: 'Cinematic Videography', category: 'photography', price: 40000, image: gd('1Rj3TFrAPvR4xQev3j1AmxFmUstgWd_KU'), description: 'Cinematic highlight reel + full event coverage.' },
  // DJ & Music
  { id: 's9', name: 'DJ & Sound System', category: 'dj', price: 20000, image: gd('1mW7UU6a4GEEB0RB599JdWKJyHhV-cq6T'), description: 'Professional DJ with JBL sound system and dance lighting.' },
  { id: 's10', name: 'Live Band', category: 'dj', price: 50000, image: gd('1RxzImI6GvBhfhorqxGACmkMAkxDYxJOM'), description: 'Live musical band performing Bollywood, retro and modern hits.' },
  // Venue
  { id: 's11', name: 'Banquet Hall', category: 'venue', price: 60000, image: gd('1R0Awbm49FmBgfajw_P69adxsn99-b6g8'), description: 'Premium indoor venue with AC, 300 pax capacity.' },
  { id: 's12', name: 'Outdoor Garden Venue', category: 'venue', price: 75000, image: gd('12y2Fe5RkMvmlqBCp_bWYmdGuaVWE7TSw'), description: 'Beautiful garden venue with natural décor and open sky.' },
  // Catering extras
  { id: 's13', name: 'Cake & Desserts', category: 'catering', price: 8000, image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=80', description: 'Custom designer cake with dessert counter.' },
  // Decoration extras
  { id: 's14', name: 'Mehendi Artist', category: 'decoration', price: 10000, image: gd('18a1CQt9mNnXUw2YDR32Sxj72wUFtvA4E'), description: 'Professional mehendi artist for bridal and guest mehendi.' },
  { id: 's15', name: 'Anchor/Emcee', category: 'dj', price: 15000, image: gd('1ikFKmqcWUDe0xXm9hOcYZb6gDDmiJOvv'), description: 'Experienced event host to keep the energy high.' },
  { id: 's16', name: 'Photo Booth', category: 'photography', price: 12000, image: gd('1Imk6NlV1lsG20ZDl2M764jFeCBDU0-T6'), description: 'Fun photo booth with props, backdrops and instant prints.' },
  // Meals
  { id: 's17', name: 'Veg Thali (per plate)', category: 'meals', price: 250, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80', description: 'Complete veg thali with dal, paneer, sabzi, roti, rice, raita & dessert.' },
  { id: 's18', name: 'Non-Veg Thali (per plate)', category: 'meals', price: 350, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80', description: 'Full non-veg thali with chicken curry, mutton, dal, roti, rice & raita.' },
  { id: 's19', name: 'Live Chaat Counter', category: 'meals', price: 8000, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80', description: 'Pani puri, bhel puri, sev puri, dahi puri & papdi chaat — live counter.' },
  { id: 's20', name: 'Live Tandoor Counter', category: 'meals', price: 12000, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80', description: 'Fresh naan, tandoori roti, paneer tikka & kebabs made live.' },
];

// ── Add-ons ──────────────────────────────────────────────
export const addOnServices = [
  { id: 'a1', name: 'Fireworks', price: 15000, icon: '🎆', description: 'Grand fireworks display for your event finale.' },
  { id: 'a2', name: 'Live Singer', price: 25000, icon: '🎤', description: 'Professional vocalist performing live at your event.' },
  { id: 'a3', name: 'DJ Upgrade', price: 10000, icon: '🎧', description: 'Premium DJ with LED dance floor and fog machines.' },
  { id: 'a4', name: 'LED Lights', price: 8000, icon: '💡', description: 'Dynamic LED uplighting and color wash effects.' },
  { id: 'a5', name: 'Extra Photographer', price: 18000, icon: '📸', description: 'Additional photographer for better coverage.' },
  { id: 'a6', name: 'Entry Decor', price: 12000, icon: '🚪', description: 'Grand entry setup with flower gate and red carpet.' },
  { id: 'a7', name: 'Drone Coverage', price: 20000, icon: '🚁', description: 'Aerial drone videography for stunning views.' },
  { id: 'a8', name: 'Return Gifts', price: 5000, icon: '🎁', description: 'Curated gift hampers for your guests (per 50 pax).' },
];

// ── Birthday Packages ────────────────────────────────────
export const birthdayPackages = [
  { id: 'b1', name: 'Basic Birthday', price: 15000, image: gd('1jkusVpSWrBb0sT9hEQAtYEcw62NS4M41'), items: ['Balloon Decoration', 'Cake (2kg)', 'Background Music', 'Photo Corner'], description: 'Simple yet elegant birthday celebration setup.' },
  { id: 'b2', name: 'Premium Birthday', price: 35000, image: gd('1Imk6NlV1lsG20ZDl2M764jFeCBDU0-T6'), items: ['Floral + Balloon Decor', 'Designer Cake (3kg)', 'DJ & Sound', 'Photography', 'Photo Booth'], description: 'A premium celebration with all the bells and whistles.' },
  { id: 'b3', name: 'Kids Theme Party', price: 25000, image: gd('17tUL0NOyEY8pumG_oueu2efHNFHWtW2B'), items: ['Themed Decoration', 'Fun Games Setup', 'Magic Show', 'Cake + Snacks', 'Return Gifts'], description: 'Magical themed party for your little ones.' },
  { id: 'b4', name: 'Surprise Birthday', price: 40000, image: gd('1uFYOoAgum0Pz2HBemgZ3pNwa-ljRlycv'), items: ['Surprise Room Decor', 'LED Lights', 'Cake + Flowers', 'Photography', 'Confetti Blast'], description: 'The ultimate surprise party that they\'ll never forget.' },
];

// ── Wedding Packages ─────────────────────────────────────
export const weddingPackages = [
  { id: 'w1', name: 'Engagement Ceremony', price: 80000, image: gd('1oVt9rdPNmv_ZwJLdksw5aMoVafUnZyEn'), items: ['Ring Ceremony Stage', 'Floral Decor', 'Photography', 'Catering (50 pax)', 'DJ'], description: 'Beautiful engagement ceremony setup.' },
  { id: 'w2', name: 'Haldi Ceremony', price: 45000, image: gd('1IT72Zro-o2JTseV6rf5IbBs4VnqzwbXz'), items: ['Yellow Theme Decor', 'Flower Shower Setup', 'Photography', 'Snacks & Drinks'], description: 'Vibrant haldi ceremony with traditional elements.' },
  { id: 'w3', name: 'Mehndi Function', price: 55000, image: gd('18a1CQt9mNnXUw2YDR32Sxj72wUFtvA4E'), items: ['Rajasthani Theme', 'Mehendi Artists (3)', 'Live Music', 'Chaat Counter', 'Photography'], description: 'Colorful mehndi celebration with live music.' },
  { id: 'w4', name: 'Wedding Day', price: 300000, image: gd('12y2Fe5RkMvmlqBCp_bWYmdGuaVWE7TSw'), items: ['Mandap Setup', 'Full Floral Decor', 'Varmala Stage', 'Photography + Video', 'Full Catering', 'DJ + Band'], description: 'Complete wedding day management.' },
  { id: 'w5', name: 'Reception', price: 200000, image: gd('1BnbKauymyDE2CYHXyy6a_-zeh0nFg9gJ'), items: ['Grand Stage', 'LED Wall', 'Premium Catering', 'DJ & Dance Floor', 'Photography', 'Valet Parking'], description: 'Grand reception celebration.' },
];

// ── Wedding Tier Packages ────────────────────────────────
export const weddingTierPackages = [
  { id: 'wt1', tier: 'Silver', price: 250000, color: '#C0C0C0', items: ['Basic Decoration', 'Photography', 'Veg Catering (200 pax)', 'DJ Sound'], popular: false },
  { id: 'wt2', tier: 'Gold', price: 500000, color: '#FFD700', items: ['Premium Decoration', 'Photo + Video', 'Multi-cuisine (300 pax)', 'DJ + Band', 'Entry Decor', 'Photo Booth'], popular: true },
  { id: 'wt3', tier: 'Platinum', price: 1000000, items: ['Luxury Destination Decor', 'Cinematic Coverage', 'Royal Catering (500 pax)', 'Celebrity DJ', 'Fireworks', 'Drone Coverage', 'Valet + Security'], popular: false, color: '#E5E4E2' },
];

// ── Anniversary Packages ─────────────────────────────────
export const anniversaryPackages = [
  { id: 'an1', name: 'Romantic Room Decor', price: 12000, image: gd('1AsA5F_FgLObqrRWwBsrMVkaqy7r0-IMh'), items: ['Rose Petal Decor', 'Candles & Fairy Lights', 'Heart Balloons', 'Cake (1kg)'], description: 'Intimate romantic room setup.' },
  { id: 'an2', name: 'Candle Light Dinner', price: 18000, image: gd('11X5REXNOGsi1-paBiiNCFXHvlaOwU0Z2'), items: ['Private Dining Setup', 'Candle Decor', '4-Course Meal', 'Background Music', 'Flowers'], description: 'Private candlelight dinner experience.' },
  { id: 'an3', name: 'Terrace Decor', price: 25000, image: gd('11_1pg2mqI-56QKmAFpmr-8v4mDr1L570'), items: ['Terrace Transformation', 'Fairy Lights', 'Cabana Setup', 'Dinner + Drinks', 'Photography'], description: 'Dreamy terrace setup under the stars.' },
  { id: 'an4', name: 'Luxury Anniversary', price: 50000, image: gd('1aMtDvBpdX7i_-lZKnJ0MnY4kxt3xECbW'), items: ['Full Venue Decor', 'Live Music', 'Premium Dinner', 'Photography + Video', 'Guest Gifts'], description: 'Grand anniversary celebration.' },
];

// ── Baby Shower Packages ─────────────────────────────────
export const babyShowerPackages = [
  { id: 'bs1', name: 'Boy Theme', price: 20000, image: gd('1ClDiclQVGFYvrrK0be1ev4GDSyKOFZhW'), items: ['Blue Balloon Arch', 'Themed Backdrop', 'Cake Table', 'Photography'], description: 'Adorable blue-themed baby shower.' },
  { id: 'bs2', name: 'Girl Theme', price: 20000, image: gd('1u3CM0FPPTwp1Ko0kDj-nkNADZ_JSzKz2'), items: ['Pink Balloon Arch', 'Floral Backdrop', 'Dessert Table', 'Photography'], description: 'Sweet pink-themed baby shower.' },
  { id: 'bs3', name: 'Neutral Theme', price: 22000, image: gd('1tLV9LGQDlGo5-ZAyXQtH4jhJIjym7coC'), items: ['Pastel Balloon Arch', 'Greenery Backdrop', 'Cake + Cupcakes', 'Games Setup', 'Photography'], description: 'Elegant gender-neutral celebration.' },
];

// ── Party Packages ───────────────────────────────────────
export const partyPackages = [
  { id: 'p1', name: 'Bachelor Party', price: 30000, image: gd('1uFYOoAgum0Pz2HBemgZ3pNwa-ljRlycv'), items: ['Neon Decor', 'DJ + Sound', 'Drinks Counter', 'Photo Booth', 'Games'], description: 'Epic bachelor party setup.' },
  { id: 'p2', name: 'Surprise Party', price: 25000, image: gd('1mW7UU6a4GEEB0RB599JdWKJyHhV-cq6T'), items: ['Surprise Setup', 'Balloon Blast', 'Cake + Snacks', 'Photography', 'LED Lights'], description: 'Plan the perfect surprise.' },
  { id: 'p3', name: 'Friends Get-together', price: 18000, image: gd('1RxzImI6GvBhfhorqxGACmkMAkxDYxJOM'), items: ['Casual Decor', 'BBQ Setup', 'Music System', 'Games Corner'], description: 'Casual hangout with your squad.' },
  { id: 'p4', name: 'House Party', price: 22000, image: gd('1Jlbg7Y5AUbVr4UEKtu-owmyjsCouSMdS'), items: ['Home Decoration', 'LED Dance Floor', 'Snacks & Drinks', 'Portable DJ Setup'], description: 'Turn your home into a party venue.' },
];

// ── Car Decor Packages ───────────────────────────────────
export const carDecorPackages = [
  { id: 'c1', name: 'Wedding Car Decor', price: 8000, image: gd('1z1nk943BASJN0rLtC9f5jEaks5RYrsMt'), items: ['Floral Car Decoration', 'Ribbon & Draping', 'Just Married Board'], description: 'Beautiful floral décor for the wedding car.' },
  { id: 'c2', name: 'Anniversary Car Decor', price: 6000, image: gd('1IIqGjoMkPa6q3GHFS9QMZ58Zy_EwXRo2'), items: ['Rose Petals', 'Heart Balloons', 'LED Lights'], description: 'Romantic car decoration for anniversaries.' },
  { id: 'c3', name: 'Surprise Car Setup', price: 10000, image: gd('1LlmjG79gwvKTp5MNPkYe3_F6HesERhk_'), items: ['Full Car Wrap', 'Balloon Pop', 'Custom Message', 'Confetti Blast'], description: 'Surprise someone with a decorated car.' },
];

// ── Home Decor Packages ──────────────────────────────────
export const homeDecorPackages = [
  { id: 'h1', name: 'Romantic Room Decor', price: 10000, image: gd('1whxHX14R4zG8EJrlQPs0f5i9t9OFrpcH'), items: ['Rose Petals', '100 Candles', 'Fairy Lights', 'Heart Balloons'], description: 'Turn any room into a romantic paradise.' },
  { id: 'h2', name: 'Proposal Setup', price: 20000, image: gd('1dDkbe6tJGCm2IieeM9ohT66KQFzpanjc'), items: ['WILL YOU MARRY ME Setup', 'Ring Holder Decor', 'Rose Path', 'Candle Ring', 'Photography'], description: 'The perfect proposal deserves the perfect setup.' },
  { id: 'h3', name: 'Festival Decor', price: 8000, image: gd('12gycMn0iXxK8wGh2VXzS1IYCoai3rlMT'), items: ['Rangoli Setup', 'Flower Torans', 'Diyas & Lights', 'Entrance Decor'], description: 'Festive home decoration for Diwali, Holi and more.' },
  { id: 'h4', name: 'Surprise Decoration', price: 15000, image: gd('1FcjBKUYf9qR7jVnAxOUbiCA2DBz3GFJh'), items: ['Themed Decor', 'Balloon Burst', 'Custom Banner', 'Cake Setup', 'LED Lights'], description: 'Surprise your loved ones with an amazing room makeover.' },
];

// ── Meal Packages ────────────────────────────────────────
export const mealPackages = [
  { id: 'm1', name: 'Veg Thali Meal', price: 250, perPlate: true, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80', items: ['Dal Makhani / Tadka', 'Paneer Butter Masala', 'Seasonal Sabzi', 'Jeera Rice', 'Roti / Naan', 'Raita & Papad', 'Gulab Jamun'], description: 'Hearty North Indian veg thali with all the classics. Minimum 50 plates.' },
  { id: 'm2', name: 'Non-Veg Thali Meal', price: 350, perPlate: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80', items: ['Butter Chicken', 'Mutton Rogan Josh', 'Dal Tadka', 'Jeera Rice', 'Roti / Naan', 'Raita', 'Kheer'], description: 'Premium non-veg thali with rich gravies. Minimum 50 plates.' },
  { id: 'm3', name: 'South Indian Feast', price: 200, perPlate: true, image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80', items: ['Idli & Vada', 'Masala Dosa', 'Sambhar & Chutney', 'Rasam', 'Curd Rice', 'Banana Chips', 'Payasam'], description: 'Authentic South Indian banana-leaf style feast. Minimum 50 plates.' },
  { id: 'm4', name: 'Live Chaat Counter', price: 8000, perPlate: false, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80', items: ['Pani Puri', 'Bhel Puri', 'Sev Puri', 'Dahi Puri', 'Papdi Chaat', 'Ragda Pattice'], description: 'Interactive live chaat station — unlimited for up to 100 guests.' },
  { id: 'm5', name: 'Live Tandoor Counter', price: 12000, perPlate: false, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80', items: ['Tandoori Roti', 'Butter Naan', 'Garlic Naan', 'Paneer Tikka', 'Chicken Tikka', 'Seekh Kebab'], description: 'Fresh breads & kebabs made live on charcoal tandoor. Up to 100 guests.' },
  { id: 'm6', name: 'Biryani Counter', price: 10000, perPlate: false, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80', items: ['Hyderabadi Veg Biryani', 'Chicken Dum Biryani', 'Raita', 'Mirchi Ka Salan', 'Onion-Lemon Salad'], description: 'Aromatic dum biryani counter for up to 100 guests.' },
  { id: 'm7', name: 'Chinese / Indo-Chinese', price: 280, perPlate: true, image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80', items: ['Manchurian', 'Fried Rice', 'Hakka Noodles', 'Spring Rolls', 'Chilli Paneer / Chicken', 'Sweet Corn Soup'], description: 'Indo-Chinese favorites everyone loves. Minimum 50 plates.' },
  { id: 'm8', name: 'Continental Platter', price: 400, perPlate: true, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80', items: ['Pasta Alfredo / Arabiata', 'Garlic Bread', 'Caesar Salad', 'Grilled Chicken / Paneer', 'Mushroom Soup', 'Tiramisu'], description: 'Elegant continental spread for premium events. Minimum 30 plates.' },
  { id: 'm9', name: 'Dessert Bar', price: 6000, perPlate: false, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80', items: ['Gulab Jamun', 'Ras Malai', 'Jalebi', 'Kulfi', 'Pastries', 'Ice Cream Counter'], description: 'Sweet indulgence counter — unlimited for up to 100 guests.' },
  { id: 'm10', name: 'Mughlai Special', price: 450, perPlate: true, image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=80', items: ['Mutton Biryani', 'Chicken Korma', 'Shahi Paneer', 'Roomali Roti', 'Seekh Kebab', 'Shahi Tukda'], description: 'Royal Mughlai feast for the most prestigious events. Min 50 plates.' },
  { id: 'm11', name: 'Snacks & Starters', price: 150, perPlate: true, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880049?w=600&q=80', items: ['Samosa', 'Veg Pakora', 'Paneer Tikka', 'Chicken 65', 'Aloo Tikki', 'Spring Rolls'], description: 'Hot evening snacks & starters to get the party started. Min 50 plates.' },
  { id: 'm12', name: 'Beverage Station', price: 5000, perPlate: false, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80', items: ['Masala Chai', 'Filter Coffee', 'Fresh Juice Counter', 'Lassi & Chaas', 'Thandai', 'Mocktails'], description: 'Refreshing drinks counter — unlimited for up to 100 guests.' },
];

// ── Trending Packages ────────────────────────────────────
export const trendingPackages = [
  { id: 't1', name: 'The Royal Imperial', price: 500000, image: gd('19Dnot_BIIFsZ6bEIevPfzl67Qtt271Q3'), description: 'Full-scale destination wedding management with premium catering.' },
  { id: 't2', name: 'Neon Midnight Rave', price: 120000, image: gd('1uFYOoAgum0Pz2HBemgZ3pNwa-ljRlycv'), description: 'Immersive lighting, top-tier sound, and bespoke cocktail catering.' },
  { id: 't3', name: 'Bohemian Garden', price: 95000, image: gd('12y2Fe5RkMvmlqBCp_bWYmdGuaVWE7TSw'), description: 'Whimsical outdoor floral decor for birthdays and baby showers.' },
];

// ── Gallery Images ───────────────────────────────────────
export const galleryImages = {
  wedding: [
    gd('19Dnot_BIIFsZ6bEIevPfzl67Qtt271Q3'),
    gd('12y2Fe5RkMvmlqBCp_bWYmdGuaVWE7TSw'),
    gd('1VwHqNzNnsrc92vu_TVyaSD-FxUmhYQSV'),
    gd('1h83qRp-pr6cKJYg56pOHUpvVYUjblOIy'),
    gd('18jJSaj2TWnPOxxkVTCwfry42-AAVkOIC'),
    gd('14toQYbvQvu4p-CsF2-uyjJLwp4n1_e1m'),
    gd('1oVt9rdPNmv_ZwJLdksw5aMoVafUnZyEn'),
    gd('18fzR7TxAowDb6becxbY7B-t4UKDc7Wsz'),
    gd('1gEQYAJMLSDg_9Jiyuvr4_v4kVJBeEIPq'),
  ],
  birthday: [
    gd('1jkusVpSWrBb0sT9hEQAtYEcw62NS4M41'),
    gd('1Imk6NlV1lsG20ZDl2M764jFeCBDU0-T6'),
    gd('17tUL0NOyEY8pumG_oueu2efHNFHWtW2B'),
    gd('1FcjBKUYf9qR7jVnAxOUbiCA2DBz3GFJh'),
  ],
  anniversary: [
    gd('1AsA5F_FgLObqrRWwBsrMVkaqy7r0-IMh'),
    gd('11X5REXNOGsi1-paBiiNCFXHvlaOwU0Z2'),
    gd('11_1pg2mqI-56QKmAFpmr-8v4mDr1L570'),
    gd('1aMtDvBpdX7i_-lZKnJ0MnY4kxt3xECbW'),
    gd('1Rj3TFrAPvR4xQev3j1AmxFmUstgWd_KU'),
    gd('1lyRjAJyDzdDmKESo4Lz0hJmKxHERhvtE'),
  ],
  'baby-shower': [
    gd('1ClDiclQVGFYvrrK0be1ev4GDSyKOFZhW'),
    gd('1u3CM0FPPTwp1Ko0kDj-nkNADZ_JSzKz2'),
    gd('1tLV9LGQDlGo5-ZAyXQtH4jhJIjym7coC'),
    gd('1rSmkdTAzOqQdsXcfVl7E4tCy4npLWfm_'),
    gd('1hIHroA9RDCnKDak4bynw-LKOLkxupcxT'),
  ],
  party: [
    gd('1uFYOoAgum0Pz2HBemgZ3pNwa-ljRlycv'),
    gd('1mW7UU6a4GEEB0RB599JdWKJyHhV-cq6T'),
    gd('1RxzImI6GvBhfhorqxGACmkMAkxDYxJOM'),
    gd('1Jlbg7Y5AUbVr4UEKtu-owmyjsCouSMdS'),
  ],
  haldi: [
    gd('1IT72Zro-o2JTseV6rf5IbBs4VnqzwbXz'),
    gd('1zeF2SZ2ClYIq7-qq_tllnDSAeXvR6TmN'),
    gd('1q_c5GRhs2YtJrFAftkZWfsAhHaotJHxL'),
  ],
  mehndi: [
    gd('18a1CQt9mNnXUw2YDR32Sxj72wUFtvA4E'),
    gd('1u5xIzlWEzsu54nfvWkri_fOuiV-vPaDk'),
    gd('16oe4TaqjolkoLBSsuCYYsZSSWBAUBnw0'),
  ],
  mandap: [
    gd('12y2Fe5RkMvmlqBCp_bWYmdGuaVWE7TSw'),
    gd('1VwHqNzNnsrc92vu_TVyaSD-FxUmhYQSV'),
    gd('1h83qRp-pr6cKJYg56pOHUpvVYUjblOIy'),
    gd('18jJSaj2TWnPOxxkVTCwfry42-AAVkOIC'),
    gd('14toQYbvQvu4p-CsF2-uyjJLwp4n1_e1m'),
  ],
  stage: [
    gd('1BnbKauymyDE2CYHXyy6a_-zeh0nFg9gJ'),
    gd('1mRnvlsdg5_t_YaB_E_RiuX_vW1qgj-W0'),
    gd('1Jlbg7Y5AUbVr4UEKtu-owmyjsCouSMdS'),
    gd('1ikFKmqcWUDe0xXm9hOcYZb6gDDmiJOvv'),
    gd('1R0Awbm49FmBgfajw_P69adxsn99-b6g8'),
  ],
  'car-decor': [
    gd('1z1nk943BASJN0rLtC9f5jEaks5RYrsMt'),
    gd('1IIqGjoMkPa6q3GHFS9QMZ58Zy_EwXRo2'),
    gd('1LlmjG79gwvKTp5MNPkYe3_F6HesERhk_'),
  ],
  'home-decor': [
    gd('1whxHX14R4zG8EJrlQPs0f5i9t9OFrpcH'),
    gd('1dDkbe6tJGCm2IieeM9ohT66KQFzpanjc'),
    gd('12gycMn0iXxK8wGh2VXzS1IYCoai3rlMT'),
    gd('1FcjBKUYf9qR7jVnAxOUbiCA2DBz3GFJh'),
  ],
  'entry-gate': [
    gd('17I-To1X3v2rquWUFHoqwqk4E_W0xe1Vx'),
    gd('1leGWEKMZoCXiMhnWVqZqKonYUG8dudq-'),
  ],
  meals: [
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80',
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
    'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80',
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80',
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80',
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
  ],
};

// ── Testimonials ─────────────────────────────────────────
export const testimonials = [
  { id: 1, name: 'Priya & Rahul Sharma', event: 'Wedding, Oct 2024', text: 'EventDhara Pro turned our simple rooftop wedding into a scene from a dream. The attention to detail in the lighting was simply breathtaking.', rating: 5 },
  { id: 2, name: 'Ananya Gupta', event: 'Birthday Party, Jan 2025', text: 'The DJ and the photo booth were the highlight of my 25th birthday! Everything was handled so professionally, I didn\'t have to lift a finger.', rating: 5 },
  { id: 3, name: 'Deepak & Meera Patel', event: 'Anniversary, Dec 2024', text: 'Highly sophisticated team. They curated our 25th Anniversary with such grace. Our guests were talking about the decor for weeks.', rating: 5 },
];

export const FALLBACK_IMAGE = FALLBACK_IMG;
