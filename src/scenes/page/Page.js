import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../styles/index';

import img from './twitter.jpeg';
import PageCard from '../../components/organisms/pagecard/PageCard';
import Header from '../../components/organisms/header/Header';

import firestore from '@react-native-firebase/firestore';

function Page({ navigation, route }) {
    const jobRef = route.params.jobRef;
    const type = route.params.type;
    const [data, setData] = React.useState(null);

    const onResult = async QuerySnapshot => {
        const data = QuerySnapshot.data();
        setData(data);
    };

    const onError = error => {
        console.log(error);
    };

    React.useEffect(() => {
        const fetchJob = async () => {
            await firestore()
                .collection(type)
                .doc(jobRef)
                .onSnapshot(onResult, onError);
        };

        fetchJob();
    }, []);

    const renderTitle = () => {
        if (type === 'Jobs') {
            return data.title;
        } else if (type === 'Companies') {
            return data.company_name;
        } else if (type === 'Users') {
            return `${data.name.firstName} ${data.name.lastName}`;
        } else {
            return 'Result';
        }
    };

    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title={data !== null ? renderTitle() : null}
                leftButton="back"
                rightButton={null}
            />
            <View style={styles.body}>
                {data === null ? (
                    <ActivityIndicator size={60} color={Colors.GREEN} />
                ) : (
                    <PageCard
                        header={data.title}
                        subheader={data.company}
                        imgsrc={img}
                        location={data.location}
                        description={data.description}
                        date={data.time_stamp}
                        link={data.link}
                        type="job"
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.WHITE,
    },
    body: {
        flex: 9,
        flexGrow: 9,
        borderTopWidth: 0.5,
        borderTopColor: Colors.GRAY_DARK,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Page;
