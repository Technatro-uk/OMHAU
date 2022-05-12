import React from 'react';
import {
    FeaturesContainer,
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
} from './Features.Elements';
import { featuresData } from './Data';

const Features = () => {

	return (
		<FeaturesContainer>
				<FeatureTextWrapper>
					<FeatureTitle>Resources</FeatureTitle>
				</FeatureTextWrapper>
				<FeatureWrapper>
					{featuresData.map((el) => (
						<FeatureColumn to={el.featureLink}>
							<FeatureImageWrapper className={el.imgClass}>
								{el.icon}
							</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
							<FeatureText>{el.description}</FeatureText>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</FeaturesContainer>
	);
};

export default Features;