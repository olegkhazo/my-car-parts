<template>
  <div class="content-wrapper">
    <div>
      <h2>Privacy Policy</h2>
      <p>
        This Privacy Policy outlines how MyNextParts ("we," "us," or "our") collects, uses, discloses, and protects the
        personal information of users ("you" or "users") on our platform. By accessing or using MyNextParts, you agree
        to the terms outlined in this Privacy Policy.
      </p>
      <p><strong>1. Information We Collect:</strong></p>
      <ul>
        <li>
          <strong>User Information:</strong> We collect information provided by users during account registration,
          including name, email address, and contact details.
        </li>
        <li>
          <strong>Request Details:</strong> When users submit requests for automotive parts, we collect information
          about the requested parts and the user's vehicle.
        </li>
        <li>
          <strong>Communication:</strong> We store correspondence between users and sellers related to parts requests.
        </li>
      </ul>
      <p><strong>2. How We Use Your Information:</strong></p>
      <ul>
        <li><strong>Platform Functionality:</strong> To facilitate the connection between buyers and sellers.</li>
        <li><strong>Communication:</strong> To respond to user inquiries and provide updates on parts requests.</li>
        <li><strong>Improvement:</strong> To enhance our platform, services, and user experience.</li>
      </ul>
      <p><strong>3. Information Sharing:</strong></p>
      <ul>
        <li>
          <strong>Buyer-Seller Communication:</strong> Information shared in parts request forms and communications
          between buyers and sellers may be visible to both parties, except buyer's contact information.
        </li>
        <li>
          <strong>Legal Compliance:</strong> We may disclose information as required by law or in response to legal
          requests.
        </li>
      </ul>
      <p><strong>4. Security:</strong></p>
      <ul>
        <li>
          We implement security measures to protect user information; however, no method of transmission over the
          internet or electronic storage is completely secure.
        </li>
      </ul>
      <p><strong>5. Cookies:</strong></p>
      <ul>
        <li>
          MyNextParts uses cookies to enhance user experience. Users can control cookie settings in their web browsers.
        </li>
      </ul>
      <p><strong>6. Third-Party Links:</strong></p>
      <ul>
        <li>
          Our platform may contain links to third-party websites. We are not responsible for the privacy practices of
          these websites.
        </li>
      </ul>
      <p><strong>7. Data Retention:</strong></p>
      <ul>
        <li>
          We retain user information for as long as necessary to fulfill the purposes outlined in this Privacy Policy.
        </li>
      </ul>
      <p><strong>8. Children's Privacy:</strong></p>
      <ul>
        <li>
          MyNextParts is not intended for users under the age of 13. We do not knowingly collect personal information
          from children.
        </li>
      </ul>
      <p><strong>9. Changes to Privacy Policy:</strong></p>
      <ul>
        <li>
          We reserve the right to update this Privacy Policy. Users are responsible for reviewing it periodically.
        </li>
      </ul>
      <p><strong>10. Contact Us:</strong></p>
      <ul>
        <li>
          If you have any questions or concerns about our Privacy Policy, please contact us at
          <a href="mailto:o.zhuravko@gmail.com">o.zhuravko@gmail.com</a>.
        </li>
      </ul>
      <p>
        By using MyNextParts, you consent to the terms of this Privacy Policy. If you do not agree with these terms,
        please refrain from using our services.
      </p>
    </div>
    <br />
    <NuxtLink class="light-gray-btn" to="/">Home Page</NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: "MyNextParts - Privacy policy",
  meta: [
    {
      name: "description",
      content: "Privacy policy of MyNextParts service",
    },
  ],
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.content-wrapper {
  min-height: 60vh;

  a:not(.light-gray-btn) {
    text-decoration: none;
    color: $blue;
    font-weight: 600;
  }
}
</style>
