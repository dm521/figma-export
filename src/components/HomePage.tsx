import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

interface HomePageProps {
  navigation?: any;
}

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#090B0F" />
      
      {/* 背景图片 */}
      <Image
        source={{ uri: 'https://picsum.photos/375/812?random=1' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* 主要内容区域 */}
      <View style={styles.content}>
        {/* 顶部导航区域 */}
        <View style={styles.topNavigation}>
          {/* 角色信息卡片 */}
          <View style={styles.characterCard}>
            <View style={styles.characterInfo}>
              <Image
                source={{ uri: 'https://picsum.photos/34/34?random=2' }}
                style={styles.avatar}
              />
              <View style={styles.characterDetails}>
                <View style={styles.nameRow}>
                  <Text style={styles.characterName}>Nina</Text>
                  <View style={styles.verifiedIcon}>
                    <Text style={styles.verifiedText}>▼</Text>
                  </View>
                </View>
                <View style={styles.followersRow}>
                  <Text style={styles.followersCount}>3.2w关注</Text>
                  <TouchableOpacity style={styles.followButton}>
                    <LinearGradient
                      colors={['#E6BA4A', '#E2E64A', '#81DB62']}
                      style={styles.followButtonGradient}
                    >
                      <View style={styles.plusIcon}>
                        <View style={styles.plusHorizontal} />
                        <View style={styles.plusVertical} />
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* 菜单按钮 */}
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
        </View>

        {/* 简介卡片 */}
        <View style={styles.introCard}>
          <View style={styles.introContent}>
            <Text style={styles.introTitle}>情景简介</Text>
            <Text style={styles.introText} numberOfLines={4}>
              情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景情景介绍情…
            </Text>
          </View>
          <View style={styles.introDecoration}>
            <LinearGradient
              colors={['#FD8B6A', '#FAFE66', '#C4DB62']}
              style={styles.decorationGradient}
            />
            <TouchableOpacity style={styles.expandButton}>
              <View style={styles.expandDots}>
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* 输入框 */}
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <View style={styles.searchIcon}>
              <Text style={styles.searchIconText}>🔍</Text>
            </View>
            <Text style={styles.inputPlaceholder}>发送消息给Nina</Text>
          </View>
          <View style={styles.inputActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>⚡</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>🎁</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>⋯</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* 底部导航栏 */}
      <View style={styles.bottomBar}>
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.6)']}
          style={styles.bottomBarGradient}
        />
        <View style={styles.navigationTabs}>
          <TouchableOpacity style={styles.tabItem}>
            <LinearGradient
              colors={['#E6BA4A', '#E2E64A', '#81DB62']}
              style={styles.activeTabIndicator}
            />
            <Text style={styles.activeTabText}>首页</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Text style={styles.tabText}>消息</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <View style={styles.centerTabIcon}>
              <LinearGradient
                colors={['#E6BA4A', '#E2E64A', '#81DB62']}
                style={styles.centerTabGradient}
              >
                <Text style={styles.centerTabIconText}>+</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Text style={styles.tabText}>动态</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Text style={styles.tabText}>我的</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Home Indicator */}
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicatorBar} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090B0F',
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
    top: 0,
    left: 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  topNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 60,
  },
  characterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(9, 11, 15, 0.2)',
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 38,
    alignSelf: 'flex-start',
  },
  characterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  characterDetails: {
    gap: 2,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  characterName: {
    color: '#E4E4E7',
    fontSize: 11,
    fontWeight: '400',
  },
  verifiedIcon: {
    width: 12,
    height: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedText: {
    color: '#E4E4E7',
    fontSize: 6,
    transform: [{ rotate: '180deg' }],
  },
  followersCount: {
    color: '#BBBBBB',
    fontSize: 9,
  },
  followersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  followButton: {
    width: 38,
    height: 28,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  followButtonGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    width: 14,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusHorizontal: {
    position: 'absolute',
    width: 14,
    height: 1.5,
    backgroundColor: '#090B0F',
    borderRadius: 0.75,
  },
  plusVertical: {
    position: 'absolute',
    width: 1.5,
    height: 14,
    backgroundColor: '#090B0F',
    borderRadius: 0.75,
  },
  menuButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(9, 11, 15, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    color: '#E4E4E7',
    fontSize: 18,
    transform: [{ rotate: '180deg' }],
  },
  introCard: {
    backgroundColor: 'rgba(9, 11, 15, 0.6)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  introContent: {
    flex: 1,
  },
  introTitle: {
    color: '#E4E4E7',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  introText: {
    color: '#BBBBBB',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
  },
  introDecoration: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 80,
    height: 40,
    borderRadius: 12,
  },
  decorationGradient: {
    flex: 1,
    borderRadius: 12,
  },
  expandButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    width: 12,
    height: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandDots: {
    flexDirection: 'row',
    gap: 1,
  },
  dot: {
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#71717A',
  },
  inputContainer: {
    backgroundColor: 'rgba(212, 212, 216, 0.2)',
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIconText: {
    fontSize: 16,
    color: '#E4E4E7',
  },
  inputPlaceholder: {
    color: 'rgba(228, 228, 231, 0.3)',
    fontSize: 16,
    flex: 1,
  },
  inputActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  actionButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    fontSize: 16,
    color: '#E4E4E7',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 84,
  },
  bottomBarGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 84,
  },
  navigationTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 50,
  },
  activeTabIndicator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginBottom: 2,
  },
  activeTabText: {
    color: '#E6BA4A',
    fontSize: 16,
    fontWeight: '500',
  },
  tabText: {
    color: 'rgba(228, 228, 231, 0.5)',
    fontSize: 16,
    fontWeight: '500',
  },
  centerTabIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
  },
  centerTabGradient: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerTabIconText: {
    fontSize: 24,
    color: '#090B0F',
    fontWeight: 'bold',
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  homeIndicatorBar: {
    width: 134,
    height: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 2.5,
  },
});

export default HomePage; 