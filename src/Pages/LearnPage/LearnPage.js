import React from 'react';
import LearnBanner from '../../components/LearnBanner/LearnBanner';
import LearnPageBody from '../../components/LearnPagebody/LearnPageBody';
import SearchCourse from '../../components/SearchCourse/SearchCourse';

const LearnPage = () => {
    return (
        <div>
            <LearnBanner/>
            <SearchCourse/>
            <LearnPageBody></LearnPageBody>
        </div>
    );
};

export default LearnPage;