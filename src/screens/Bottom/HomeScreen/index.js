import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {height, width} from '../../../../utils/responsive';
import Block from '../../../components/Block';
import Header from '../../../components/Header';
import Actions from '../../../redux/actions';
import TopTab from '../../../navigation/TopTabNavigation';
import FollowScreen from './components/TopNavigation/FollowScreen';

const Tab = createMaterialTopTabNavigator();
const HomeScreen = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenApp.token);
  const newsGroup = useSelector(state => state.newsGroup.data);

  useEffect(() => {
    dispatch({
      type: Actions.GET_TOKEN,
      body: {
        username: 'ims',
        password: 'bxsMSKNrDIlO3KRsszQe0tRcHVyo2Ww6',
      },
    });
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch({
        type: Actions.GET_NEWS_GROUP,
      });
      dispatch({
        type: Actions.GET_CONFIG_APP,
      });
    }
  }, [dispatch, token]);
  return (
    <Block>
      <Header type="Home" />
      <Block width={width} height={height}>
        {newsGroup?.length > 0 ? (
          <Tab.Navigator lazy tabBar={props => <TopTab {...props} />}>
            {newsGroup.map(item => {
              return (
                <Tab.Screen name={item.title} key={item.group_id}>
                  {() => <FollowScreen group_id={item.group_id} />}
                </Tab.Screen>
              );
            })}
          </Tab.Navigator>
        ) : null}
      </Block>
    </Block>
  );
};

export default HomeScreen;
