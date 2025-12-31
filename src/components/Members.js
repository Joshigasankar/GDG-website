import React from 'react';
import ChromaGrid from './ChromaGrid/ChromaGrid';

const Members = () => {
  const teamData = {
    Leadership: [
      {
        name: "Raj Kishore S",
        role: "Campus Lead",
        photo: "https://drive.google.com/file/d/12byboPa1OgkfLezXRat3RwRmLFvm5ZSy/view?usp=sharing",
        linkedin: "https://www.linkedin.com/in/raj-kishore",
        instagram: "https://www.instagram.com/raj_kishore",
      },
    ],

    "Events & Outreach Team": [
      {
        name: "Shane Israel N",
        role: "Events & Outreach Lead",
        photo: "https://drive.google.com/open?id=1wHWLRgvAhYbfz4XyZI-9OFZPdUwrVDJA",
        linkedin: "https://www.linkedin.com/in/shane-israel",
        instagram: "https://www.instagram.com/shane_israel",
      },
      {
        name: "Adhiya",
        role: "Event Manager",
        photo: "https://drive.google.com/open?id=1JU_wHQN2yWMJ97eBvzh5ruKYwZpZ5k-a",
        linkedin: "https://www.linkedin.com/in/adhiya",
        instagram: "https://www.instagram.com/adhiya",
      },
      {
        name: "Ashwina J",
        role: "Event Manager",
        photo: "https://drive.google.com/open?id=1TVzXx2fjmJCYgkVsGTZ7LoZVB8fb7dHb",
        linkedin: "https://www.linkedin.com/in/ashwina-jayakrishnan-00b783355",
        instagram: "https://www.instagram.com/ashhwee_.__",
      },
      {
        name: "Salma",
        role: "Logistics & Operations Coordinator",
        photo: "https://drive.google.com/open?id=1MyGYwhkXYSl8hJN_A9M4_tTcT1T3lCU1",
        linkedin: "https://www.linkedin.com/in/salma",
        instagram: "https://www.instagram.com/salma",
      },
      {
        name: "Yogitha Nallasamy",
        role: "Venue & Infrastructure Manager",
        photo: "https://drive.google.com/open?id=1caZ6TB8atlpn_wuGqrGEWEBEcTYdAyHP",
        linkedin: "https://www.linkedin.com/in/yogitha-nallasamy",
        instagram: "https://www.instagram.com/yogitha_n",
      },
    ],

    "Social Media & Marketing Team": [
      {
        name: "Pavimalini",
        role: "Social Media & Marketing Lead",
        photo: "https://drive.google.com/file/d/1rmdUnLk7WPQrN5aNBWlqP70ne4m6Ag1Q/view?usp=sharing",
        linkedin: "https://www.linkedin.com/in/pavimalini",
        instagram: "https://www.instagram.com/pavimalini",
      },
      {
        name: "Prarthana S",
        role: "Media Team Member",
        photo: "https://drive.google.com/open?id=1gzFh6G9aFlrPC01FNFuz3Rl8Q-ei9OaV",
        linkedin: "https://www.linkedin.com/in/prarthana-sampath-kumar-b369b9320",
        instagram: "https://www.instagram.com/_that_optimist_",
      },
      {
        name: "Lathikka MA",
        role: "Media Team Member",
        photo: "https://drive.google.com/open?id=1624JmyDGInwqBFWfhWkiNN44c8y4LHdW",
        linkedin: "https://www.linkedin.com/in/lathikka-ma",
        instagram: "https://www.instagram.com/lathikka_ma",
      },
      {
        name: "Nesika S",
        role: "Media Team Member",
        photo: "https://drive.google.com/open?id=1J6hL0MBHkirhRtIpDl3tHOz-3Jaw3jS8",
        linkedin: "https://www.linkedin.com/in/nesika-s",
        instagram: "https://www.instagram.com/nesika_s",
      },
    ],

    "Design & UX Team": [
      {
        name: "Chandra Prabha V",
        role: "Design Volunteer",
        photo: "https://drive.google.com/open?id=1n0PAnTSd3vJFDTsxefBJlojHngx-EbDV",
        linkedin: "https://www.linkedin.com/in/chandra-prabha",
        instagram: "https://www.instagram.com/chandra_prabha",
      },
      {
        name: "Hemmanth G",
        role: "Design Volunteer",
        photo: "https://drive.google.com/open?id=1h0LLyOYs65guMZR_n1jGMqqci2DHTkA2",
        linkedin: "https://www.linkedin.com/in/hemmanth-g",
        instagram: "https://www.instagram.com/hemmanth_g",
      },
      {
        name: "Aneesh S",
        role: "Photographic Lead",
        photo: "https://drive.google.com/open?id=1yJZWavABZT47G5i0xn6tauJUw9xRPSc7",
        linkedin: "https://www.linkedin.com/in/aneesh-s",
        instagram: "https://www.instagram.com/aneesh_s",
      },
    ],

    "Emerging Tech Team": [
      {
        name: "Deepitha M",
        role: "Emerging Tech Lead",
        photo: "https://drive.google.com/open?id=1a4aA8CJUhqGsso4Jlq8xHRaw4_YDDkvr",
        linkedin: "https://www.linkedin.com/in/deepitha-m-76961928b",
        instagram: "https://www.instagram.com/afficionado_space",
      },
      {
        name: "Kavin V K",
        role: "Emerging Tech Lead",
        photo: "https://drive.google.com/open?id=1B8WWGiST8dhXuMv_rmlY_X5Tvv-8aYIb",
        linkedin: "https://www.linkedin.com/in/itzmekavinvk26",
        instagram: "https://www.instagram.com/itz_kavin_vk",
      },
      {
        name: "Tharikashri S K",
        role: "Technical Member",
        photo: "https://drive.google.com/open?id=1zG5v90_RP_hS-d-25OscRT2nh2nRZjT9",
        linkedin: "https://www.linkedin.com/in/tharikashri",
        instagram: "https://www.instagram.com/tharikashri_sk",
      },
      {
        name: "Rakshita N",
        role: "Technical Member",
        photo: "https://drive.google.com/open?id=1IIwq20Iw7kKfgjpkPk1R5b0_vVNPWC_L",
        linkedin: "https://www.linkedin.com/in/rakshita-n-",
        instagram: "https://www.instagram.com/rakshita_1802",
      },
      {
        name: "Swetha S",
        role: "Research & Resource Lead",
        photo: "https://drive.google.com/open?id=1jHwKCAW5y_HsgFyJI2rKGEVmTGHolf0g",
        linkedin: "https://www.linkedin.com/in/swetha-s",
        instagram: "https://www.instagram.com/swetha_s",
      },
    ],

    "Development Team": [
      {
        name: "Bala Murali M",
        role: "Development Lead",
        photo: "https://drive.google.com/open?id=1Nago8aQNEF_x52bpfvZLrK298LLsVaUr",
        linkedin: "https://www.linkedin.com/in/balamurali-m-940879316/",
        instagram: "https://www.instagram.com/_.dark_hand_/",
      },
      {
        name: "Arun R",
        role: "Development Lead",
        photo: "https://drive.google.com/open?id=1BeWFagBxZNaCelkqREkUu5paDbsgBnRf",
        linkedin: "https://www.linkedin.com/in/arun-r-007-/",
        instagram: "https://www.instagram.com/r.a_r_u_n_/",
      },
      {
        name: "Manoj Kumar A S",
        role: "Project Developer",
        photo: "https://drive.google.com/open?id=1V6k0rQU8ctRYeiKzTcqzbN7_x6SoAdQi",
      },
      {
        name: "Kiruthika S",
        role: "Project Developer",
        photo: "https://drive.google.com/open?id=1qMPZ05__VJm-X7VnjpiM-boI8coxDo3_",
      },
      {
        name: "Sham Sundar Senthil Kumar",
        role: "Project Developer",
        photo: "https://drive.google.com/open?id=1HR7tPwjTXD3KJ_r2G4eyP-FyaNJ_01wx",
      },
    ],

    "Finance & Management Team": [
      {
        name: "Sarvesh PV",
        role: "Finance & Management Lead",
        photo: "https://drive.google.com/open?id=1qHWP5a7bSAqpn8zM7nEkuemwou1HbEgM",
        linkedin: "https://www.linkedin.com/in/sarveshpv",
        instagram: "https://www.instagram.com/sarrvessh/",
      },
      {
        name: "T R Maitreyan",
        role: "Finance & Operations Coordinator",
        photo: "https://drive.google.com/open?id=1DjvyLrWSkc3yIuQGbWj-eIYLFoDLXuBW",
        linkedin: "https://www.linkedin.com/in/maitreyan-t-r-030a45318",
        instagram: "https://www.instagram.com/its_me_maitreyan",
      },
      {
        name: "Jeeva Prakasini G",
        role: "Management Coordinator",
        photo: "https://drive.google.com/open?id=1Ne4W3tk5-U_Q0riy7mMDcHSjXG3_XBqa",
      },
      {
        name: "Pavitra Sri S",
        role: "Management Coordinator",
        photo: "https://drive.google.com/open?id=1PLRug9Ej-Hp-6hasnaAW8BD8zXzIkYll",
      },
    ],

    "Women in Tech Team": [
      {
        name: "S Joshiga",
        role: "WiT Lead",
        photo: "https://drive.google.com/open?id=1TfbMiVOx_7DLrF2Kjgy_qu5rulqCZZDI",
        linkedin: "https://www.linkedin.com/in/joshiga-sankar-235230267",
        instagram: "https://www.instagram.com/joshigasankar",
      },
      {
        name: "Preethi S",
        role: "WiT Lead",
        photo: "https://drive.google.com/open?id=1X3X476ohuVnkkqRyKT7lvi8249oc5sfS",
        linkedin: "https://www.linkedin.com/in/preethi-senthil",
        instagram: "https://www.instagram.com/_preethi_senthil",
      },
    ],
  };

  const getPhotoUrl = (url) => {
    if (!url) return null;

    if (url.includes("_IMAGE") || url.includes("_FILE_ID")) {
      return null;
    }

    let fileId = null;

    if (url.includes("drive.google.com/open?id=")) {
      fileId = url.split("drive.google.com/open?id=")[1]?.split("&")[0];
    }
    else if (url.includes("drive.google.com/file/d/")) {
      fileId = url.split("drive.google.com/file/d/")[1]?.split("/")[0];
    }
    else if (url.includes("drive.google.com/uc?id=")) {
      fileId = url.split("drive.google.com/uc?id=")[1]?.split("&")[0];
    }
    else if (url.includes("drive.google.com/uc?export=view&id=")) {
      fileId = url.split("drive.google.com/uc?export=view&id=")[1]?.split("&")[0];
    }
    else if (url.includes("drive.google.com/thumbnail?id=")) {
      fileId = url.split("drive.google.com/thumbnail?id=")[1]?.split("&")[0];
    }

    if (fileId) {
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }

    return url;
  };

  // Color schemes for different teams
  const gradientColors = [
    { borderColor: '#4F46E5', gradient: 'linear-gradient(145deg, #4F46E5, #000)' },
    { borderColor: '#10B981', gradient: 'linear-gradient(210deg, #10B981, #000)' },
    { borderColor: '#F59E0B', gradient: 'linear-gradient(165deg, #F59E0B, #000)' },
    { borderColor: '#EF4444', gradient: 'linear-gradient(195deg, #EF4444, #000)' },
    { borderColor: '#8B5CF6', gradient: 'linear-gradient(225deg, #8B5CF6, #000)' },
    { borderColor: '#06B6D4', gradient: 'linear-gradient(135deg, #06B6D4, #000)' },
    { borderColor: '#EC4899', gradient: 'linear-gradient(180deg, #EC4899, #000)' },
    { borderColor: '#14B8A6', gradient: 'linear-gradient(150deg, #14B8A6, #000)' },
  ];

  // Transform teamData to ChromaGrid format
  const transformToChromaFormat = (category, members, colorIndex) => {
    return members.map((member, idx) => ({
      image: getPhotoUrl(member.photo) || 'https://via.placeholder.com/300?text=No+Image',
      title: member.name,
      subtitle: member.role,
      borderColor: gradientColors[(colorIndex + idx) % gradientColors.length].borderColor,
      gradient: gradientColors[(colorIndex + idx) % gradientColors.length].gradient,
      linkedin: member.linkedin,
      instagram: member.instagram,
    }));
  };

  return (
    <div className="relative min-h-screen px-4 py-32 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 w-full relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Our Team
        </h2>

        <div className="space-y-24">
          {Object.entries(teamData).map(([category, members], categoryIndex) => (
            <div key={category} className="flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                <span className="inline-block px-8 pb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 border-b-2 border-purple-400/30">
                  {category}
                </span>
              </h3>

              <div style={{ minHeight: '500px', width: '100%' }}>
                <ChromaGrid
                  items={transformToChromaFormat(category, members, categoryIndex * 2)}
                  radius={300}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;