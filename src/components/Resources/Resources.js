import React from 'react';
import {
    ResourcesContainer,
	ResourceText,
	ResourceTitle,
	ResourceWrapper,
	ResourceColumn,
	ResourceImageWrapper,
	ResourceName,
	ResourceTextWrapper,
} from './Resources.Elements';
import { featuresData } from './Data';

const Resources = () => {

	return (
		<ResourcesContainer>
				<ResourceTextWrapper>
					<ResourceTitle>Resources</ResourceTitle>
				</ResourceTextWrapper>
				<ResourceWrapper>
					{featuresData.map((el) => (
						<ResourceColumn to={el.featureLink}>
							<ResourceImageWrapper className={el.imgClass}>
								{el.icon}
							</ResourceImageWrapper>
							<ResourceName>{el.name}</ResourceName>
							<ResourceText>{el.description}</ResourceText>
						</ResourceColumn>
					))}
				</ResourceWrapper>
			</ResourcesContainer>
	);
};

export default Resources;