import React from "react";
import Link from "next/link";
import { Button, Card } from "semantic-ui-react";
import factory from "../ethereum/factory";

const CampaignIndex = ({ campaigns }) => {
  const renderCampaigns = () => {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: <Link href={`/campaigns/${address}`}>View Charities</Link>,
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  };
  return (
    <div>
      <h3>Open Charities</h3>
      <Link href="/campaigns/new">
        <Button
          floated="right"
          content="Create Charity"
          icon="add circle"
          primary
        />
      </Link>
      {renderCampaigns()}
    </div>
  );
};

CampaignIndex.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns };
};

export default CampaignIndex;
