import {GiTeacher} from 'react-icons/gi';
import {FcConferenceCall} from 'react-icons/fc';
import { HiInformationCircle } from "react-icons/hi";
import {FaNetworkWired} from 'react-icons/fa'

const card = [
  {
    id: 1,
    icon: <GiTeacher />,
    title: "Mentorship",
    description:
      "EquipAfrica offers weekly one-on-one mentorship sessions to member to equip them in various areas of interest. Mentors are experts and highly sort-after in their field.",
  },

  {
    id: 2,
    icon: <FcConferenceCall />,
    title: "Coaching Calls",
    description:
      "EquipAfrica organises fortnightly knowledge sessions on selected topics, entrepreneurs unburdening sessions, and group coaching calls.",
  },

  {
    id: 3,
    icon: <HiInformationCircle />,
    title: "Information Updates",
    description:
      "Sending of grants, scholarships, reminder and application updates on a daily updates. Members can subscribe to newsletters as well",
  },

  {
    id: 4,
    icon: <FaNetworkWired />,
    title: "Networking",
    description:
      "Monthly community asssembly, e-meet and greet, panel discussions and an avenue to meet prospective business partners, clients or mentors..",
  },
];

export default card;