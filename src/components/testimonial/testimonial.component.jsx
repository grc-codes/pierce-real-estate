import React from 'react';
import {
    TestimonialContainer,
    TestimonialText,
    TestimonialClientContainer,
    TestimonialClientName,
    TestimonialClientTitle
} from './testimonial.styles';

const Testimonial = () => (
    <TestimonialContainer>
        <TestimonialText>
            "I had an amazing experience from inception to move in day. The team went above and beyond the call of duty to present me with a beautiful home. Every day, I feel like I am on vacation. When buying a new home, we all have choices. I chose Pierce Real Estate and they have made the choice right."
        </TestimonialText>
        <TestimonialClientContainer>
            <TestimonialClientName>
                Mona Steele
            </TestimonialClientName>
            <TestimonialClientTitle>
                Customer Review, Morristown NJ
            </TestimonialClientTitle>
        </TestimonialClientContainer>
    </TestimonialContainer>
);

export default Testimonial;