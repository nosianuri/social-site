import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Group from '../home/group/Group';
import GroupTitle from '../home/group/GroupTitle';
import Contact from '../Shared/Contact';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactBody from './ContactBody';
import ContactBox from './ContactBox';


const Contacts = () => {


  return (
    <div>
    <Navbar />
      <Banner />
      <ContactBody />
      <GroupTitle />
      <Group />
      <Footer />

    </div>
  )
}

export default Contacts;