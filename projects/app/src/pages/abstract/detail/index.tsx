import {useSystemStore} from "@/web/common/system/useSystemStore";
import {useDatasetStore} from "@/web/core/dataset/store/dataset";
import {useUserStore} from "@/web/support/user/useUserStore";
import {TabEnum} from "@/pages/dataset/detail";
import PageContainer from "@/components/PageContainer";
import { useRouter } from 'next/router';
import { Box, Flex, IconButton, useTheme, Progress } from '@chakra-ui/react';
import { useToast } from '@fastgpt/web/hooks/useToast';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Abstract from "@/pages/abstract/list";
const Detail = ({ datasetId, currentTab }: { datasetId: string; currentTab: `${TabEnum}` }) => {
    const theme = useTheme();
    const {t} = useTranslation();
    const {toast} = useToast();
    const router = useRouter();
    const {isPc} = useSystemStore();
    const {datasetDetail, loadDatasetDetail, startWebsiteSync} = useDatasetStore();
    const {userInfo} = useUserStore();

    return (
        <>
            <Head>
                <title>{datasetDetail?.name}</title>
            </Head>
            <PageContainer>
            </PageContainer>
        </>
    );
}
export default Detail;