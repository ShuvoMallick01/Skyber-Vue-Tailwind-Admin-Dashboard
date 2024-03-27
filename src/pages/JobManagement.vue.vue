<script setup lang="ts">
import RecentJobPosted from "@/sections/job-management/RecentJobPosted.vue";
import Acquisitions from "@/sections/job-management/Acquisitions.vue";
import JobList from "@/sections/job-management/JobList.vue";
import CandidatesByGender from "@/sections/job-management/CandidatesByGender.vue";
import UpgradeToPro from "@/sections/job-management/UpgradeToPro.vue";
import RecentJobApplications from "@/sections/job-management/RecentJobApplications.vue";
import ApplicationReceivedTime from "@/sections/job-management/ApplicationReceivedTime.vue";
import Footer1 from "@/components/Footer/Footer1.vue";
import Widgets from "@/sections/job-management/Widgets.vue";
</script>

<!-- === TEMPLATE === -->
<template>
  <div class="grid grid-cols-3 gap-7 mb-6">
    <Widgets />

    <!-- Recent Job Posted -->
    <RecentJobPosted />

    <!-- Recent Job Applications -->
    <RecentJobApplications />

    <!-- Acquisitons -->
    <Acquisitions />

    <!-- Job List  -->
    <JobList />

    <!-- Candidates by Gender -->
    <CandidatesByGender />

    <!-- Application Recieved Time  -->
    <ApplicationReceivedTime />

    <!-- Upgrade to Pro -->
    <UpgradeToPro />

    <!-- Footer -->
    <Footer1></Footer1>
  </div>
</template>
