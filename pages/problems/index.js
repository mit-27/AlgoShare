import { Box, Flex, Heading, Text, Button, Container, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import Layout from '../../components/Layout'
import QuestionCard from '../../components/QuestionCard';

const problems = () => {

    const [loading, setLoading] = useState(false)


    return (
        <Layout width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
            {loading ? (
                <Flex pt={24} align="center" justify="center">
                    <Spinner size="xl" label="Loading Deals" />
                </Flex>
            ) : (
                <>
                    <QuestionCard plaformName="HACKERRANK" question="Longest Substring Without Repeating Characters" />
                    {/* {filteredDeals.length ? (
                        filteredDeals.map((deal) => <DealCard key={deal.id} userId={userId} {...deal} />)
                    ) : (
                        <EmptySearch />
                    )}
                    <Flex justify="flex-end" as="i" color="gray.500">
                        {`Showing ${filteredDeals.length} out of ${allDeals.length} deals in Des Moines`}
                    </Flex>
                    <Flex mt={8} display={['block', 'none', 'none', 'none']}>
                        <AddDealModal />
                    </Flex> */}
                </>
            )}
        </Layout>
    )
}

export default problems